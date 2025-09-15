import './globals.css';
import Link from 'next/link';
import Nav from '../src/components/Nav';

export const metadata = {
  title: 'Industrial Go-To-Market Platform',
  description: 'Prescriptive selling for energy & automation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Nav />
        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
