import MainNavigation from '../components/MainNavigation';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
