import fs from 'node:fs/promises';
import express from 'express';

// Constants
// Checking environment variables to determine which values to set
// Environment variables may be set automatically by Vite but can also be set by you (e.g., when hosting the app)
// For example, the NODE_ENV variable is set to "production" when running "npm run preview" (in the package.json file)
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Cached production assets
// During the build process (npm run build), these assets will be generated
// After deployment (i.e., in production), these assets will be used when serving the app
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : '';
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined;

// Create http server, using Express
const app = express();

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  // During development, the Vite dev server is used to serve assets
  // This server provides convenient features like hot reloading (to instantly reflect code changes)
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  // For production, assets are minified and served statically with a lightweight server provided by the "sirv" package
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// The below code is a handler for incoming HTTP requests (e.g., if a users vists <your-page.com>/something)
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template;
    let render;
    if (!isProduction) {
      // This code takes care of loading (and preparing) the index.html file during development
      // It also loads the render() function from the entry-server.jsx file
      // This function will be used below
      template = await fs.readFile('./index.html', 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
    } else {
      // In production, the index.html file is loaded & cached (see line 14) - this minimizes work on the server
      // In addition, the render() function is imported from the transpiled entry-server.jsx file (now called entry-server.js, since it won't contain any JSX code anymore)
      template = templateHtml;
      render = (await import('./dist/server/entry-server.js')).render;
    }

    // The render() function is called with the current URL and the SSR manifest
    // The SSR manifest is a JSON file that contains information about the server-side rendered components
    const rendered = await render(url, ssrManifest);

    // This code targets two placeholders in the index.html file: <!--app-head--> and <!--app-html-->
    // These placeholders are replaced with the rendered HTML code (i.e., with the result of the previous step)
    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '');

    // The finished, server-side rendered HTML code is sent back with the response
    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
