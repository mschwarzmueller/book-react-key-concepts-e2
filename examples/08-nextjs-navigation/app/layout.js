'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import './globals.css';

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/" className={path === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className={path === '/events' ? 'active' : ''}
                >
                  Events
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
