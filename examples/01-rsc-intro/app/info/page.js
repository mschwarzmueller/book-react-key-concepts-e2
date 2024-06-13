import fs from 'node:fs/promises';

export default async function InfoPage() {
  const info = await fs.readFile('data/rsc-info.json', 'utf-8');
  const { summary } = JSON.parse(info);

  return (
    <div id="info-page">
      <h1>Understanding React Server Components</h1>
      <p>{summary}</p>
    </div>
  );
}
