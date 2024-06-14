import DyncamicCartItem from '../components/DynamicCartItem';
import Cart from '../components/Cart';

export default function Home() {
  return (
    <>
      <header>
        <Cart>
          <DyncamicCartItem id={1} />
          <DyncamicCartItem id={2} />
          <DyncamicCartItem id={3} />
        </Cart>
      </header>
      <main>
        <h1>Some dummy app</h1>
      </main>
    </>
  );
}
