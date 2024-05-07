import type { Metadata } from 'next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Oswald } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import './globals.css';
const oswald = Oswald({ subsets: ['latin'] });

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={oswald.className}>
          {children}
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  );
}
