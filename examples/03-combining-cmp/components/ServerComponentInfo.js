import Link from 'next/link';

export default function ServerComponentInfo() {
  return (
    <div id="rsc-info">
      <p>This is a React Server Component.</p>
      <p><Link href="/info">Learn More</Link></p>
    </div>
  );
}
