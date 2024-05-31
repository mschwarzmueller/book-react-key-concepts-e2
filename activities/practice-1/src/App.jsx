import Events from './components/Events/Events.jsx';
import MainHeader from './components/MainHeader/MainHeader.jsx';
import { CartContextProvider } from './store/cart-context.jsx';

function App() {
  return (
    <>
      <CartContextProvider>
        <MainHeader />
        <main>
          <Events />
        </main>
      </CartContextProvider>
    </>
  );
}

export default App;
