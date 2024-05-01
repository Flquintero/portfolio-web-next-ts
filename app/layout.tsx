import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import './globals.css';
import Logrocket from '@/plugins/Logrocket';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Francisco Quintero Abbo',
  description:
    'Software Engineer with 8+ of experience building products with JavaScript Frameworks and TypeScript in various industries',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Logrocket />
      </head>
      <body className={oswald.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
