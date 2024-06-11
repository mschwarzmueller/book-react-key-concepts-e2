import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to our shop!</h1>
      <p>
        Please explore <Link href="/products">our products</Link> or share this
        site with others.
      </p>
    </main>
  );
}
