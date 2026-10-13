import './globals.css';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';
import Script from 'next/script';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable}`}>
      <body>
        <Script
          src="https://kit.fontawesome.com/54f19440a6.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Header />
        <main className="flex-1 p-[20px] sm:p-[35px] md:p-[50px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
