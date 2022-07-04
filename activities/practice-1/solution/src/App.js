import Events from './components/Events/Events';
import MainHeader from './components/MainHeader/MainHeader';
import { CartContextProvider } from './store/cart-context';

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
