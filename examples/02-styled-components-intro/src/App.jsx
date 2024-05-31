import Button from './components/Button.jsx';

function App() {
  function handleClick() {
    console.log('This button was clicked!');
  }
  return <Button onClick={handleClick}>Click me!</Button>;
}

export default App;
