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
