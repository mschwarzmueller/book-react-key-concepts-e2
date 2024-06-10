'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MainNavigation() {
  const path = usePathname();
  
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" className={path === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/events" className={path.startsWith('/events') ? 'active' : ''}>
              Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
