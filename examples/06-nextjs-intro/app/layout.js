import './globals.css';

export const metadata = {
  title: 'New Next.js App',
  description: 'Generated & cleaned up.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
