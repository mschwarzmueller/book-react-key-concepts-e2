import { useState } from 'react';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  function handleShowDetails() {
    setShowDetails(true);
  }

  return (
    <>
      <button onClick={handleShowDetails}>Show Details</button>
      {showDetails && <p>Only shown after the button was clicked!</p>}
    </>
  );
}

export default App;
