import { lazy, Suspense, useState } from 'react';

// import DateCalculator from './components/DateCalculator.jsx';
const DateCalculator = lazy(() => import('./components/DateCalculator.jsx'));

function App() {
  const [showDateCalc, setShowDateCalc] = useState(false);

  function handleOpenDateCalc() {
    setShowDateCalc(true);
  }

  return (
    <>
      <p>This app might be doing all kinds of things.</p>
      <p>
        But you can also open a calculator which calculates the difference
        between two dates.
      </p>
      <button onClick={handleOpenDateCalc}>Open Calculator</button>
      <Suspense fallback={<p>Loading...</p>}>
        {showDateCalc && <DateCalculator />}
      </Suspense>
      {/* {showDateCalc && <DateCalculator />} */}
    </>
  );
}

export default App;
