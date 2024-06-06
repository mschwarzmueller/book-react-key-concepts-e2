1. Create a new React project by running `npm create vite@latest my-app`. Choose "React" and "JavaScript".

    You can replace `my-app` with any name of your choice, and you can run this command in any fitting place on your system (e.g., on your desktop). 
    
    Start the development web server by running `npm run dev` inside the created project folder.

2. Open the project with any code editor of your choice—for example, with Visual Studio Code (https://code.visualstudio.com/).

3. Open the `App.jsx` file and replace the existing JSX code that is returned with JSX code that structures and contains the information about yourself that you want to output. Also import and output an image.

```jsx
import maxImg from './assets/max.jpg';

function App() {
  return (
    <>
      <header>
        <img src={maxImg} alt="An image of Max" />
        <h1>Maximilian Schwarzmüller</h1>
        <p>Web developer, online course instructor & book author</p>
      </header>
      <main>
        <p>Right now, I am 35 years old and I live in Munich.</p>
        <p>
          My full name is Maximilian Schwarzmüller and I am a web developer as
          well as top-rated, bestselling online course instructor.
        </p>
      </main>
    </>
  );
}

export default App;
```
