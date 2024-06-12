import TextBox from './components/TextBox';

function App() {
  return (
    <>
      <TextBox mode="info">
        Visit react.dev for a complete API reference.
      </TextBox>
      <TextBox mode="alert">
        Unfortunately, loading the course list failed.
      </TextBox>
    </>
  );
}

export default App;
