import { useState } from 'react';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  function showDetailsHandler() {
    setShowDetails(true);
  }

  return (
    <>
      <button onClick={showDetailsHandler}>Show Details</button>
      {showDetails && <p>Only shown after the button was clicked!</p>}
    </>
  );
}

export default App;
