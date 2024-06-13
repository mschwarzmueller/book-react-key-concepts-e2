import Cart from '@/components/Cart';
import MainNavigation from '@/components/MainNavigation';
import Products from '@/components/Products';

export default function Home() {
  return (
    <>
      <header>
        <MainNavigation />
        <Cart />
      </header>
      <main>
        <Products />
      </main>
    </>
  );
}
