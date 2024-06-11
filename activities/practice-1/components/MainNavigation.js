'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function MainNavigation() {
  const path = usePathname();
  return (
    <header id="main-nav">
      <nav>
        <ul>
          <li>
            <Link className={path === '/' ? 'active' : undefined} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={path.startsWith('/products') ? 'active' : undefined}
              href="/products"
            >
              Browse Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
