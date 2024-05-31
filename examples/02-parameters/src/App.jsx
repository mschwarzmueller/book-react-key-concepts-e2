import useCounter from './hooks/use-counter.js';

function Demo1() {
  const { counter, increment, decrement } = useCounter(1, 2, 1);

  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </>
  );
}

function Demo2() {
  const { counter, increment, decrement } = useCounter(0, 1, 2);

  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </>
  );
}

function App() {
  return (
    <main>
      <Demo1 />
      <Demo2 />
    </main>
  );
}

export default App;
