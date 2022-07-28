import useCounter from './hooks/use-counter';

function Demo1() {
  const { counter, increment, decrement } = useCounter();

  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </>
  );
}

function Demo2() {
  const { counter, increment, decrement } = useCounter();

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
