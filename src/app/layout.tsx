import './globals.css';
import type { Metadata, Viewport } from 'next';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';
import Script from 'next/script';
import { Cormorant_Garamond } from 'next/font/google';
import {
  siteUrl,
  siteName,
  siteTitle,
  siteDescription,
  keywords,
} from '@/constants/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: '%s | Nikita Fedorov' },
  description: siteDescription,
  keywords,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  verification: { google: 'MpJ_p7CthknKL2V8zk-A7kF34TGKSvbx0ixEDyH_oIk' },
  icons: {
    icon: [{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName,
    locale: 'en_GB',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marble wrestlers statue in a dark gallery of gilded paintings',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0c0201',
};

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body>
        <Script
          src="https://kit.fontawesome.com/54f19440a6.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Header />
        <main className="p-[20px] sm:p-[35px] md:p-[50px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
