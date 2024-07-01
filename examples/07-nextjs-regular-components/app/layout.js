import './globals.css';
import MainNavigation from '../components/MainNavigation';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
