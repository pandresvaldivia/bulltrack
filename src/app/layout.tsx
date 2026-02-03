import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/ui/shared/styles/globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bulltrack',
  description:
    'Una plataforma avanzada de ranking genético bovino para decisiones estratégicas de compra de ganado.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
