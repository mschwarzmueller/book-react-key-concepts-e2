import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>User Goals</h1>
      <p>Find out what users want to achieve!</p>
      <p>
        <Link href="/goals">View user goals</Link>
      </p>
    </>
  );
}