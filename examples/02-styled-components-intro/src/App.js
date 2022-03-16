import Button from './components/Button';

function App() {
  function clickHandler() {
    console.log('This button was clicked!');
  }
  return <Button onClick={clickHandler}>Click me!</Button>;
}

export default App;
