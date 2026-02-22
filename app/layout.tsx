import React from 'react';
import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';

import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-silkscreen',
});

export const metadata: Metadata = {
  title: '',
  description: `Hi 👋, I'm  I'm a passionate software engineer with a knack for creating scalable, high-performance applications and reusable systems. With a strong foundation in front-end and back-end technologies, I specialize in crafting solutions that are as impactful for users as they are efficient for developers.`,
  creator: '',
  applicationName: 'My website',
  keywords: [
    '',
    '',
    '',
    'Portfolio',
    'Next.js',
    'Software engineer',
  ],
  icons: {
    icon: './favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [

    ],
  },
  openGraph: {
    type: 'website',
    url: '',
    title: ' - Software Engineer',
    description: `Hi 👋, I'm . I'm a passionate software engineer with a knack for creating scalable, high-performance applications and reusable systems. With a strong foundation in front-end and back-end technologies, I specialize in crafting solutions that are as impactful for users as they are efficient for developers.`,
    images: [

    ],
  },
  twitter: {
    title: ' - Software Engineer',
    description: `Hi 👋, I'm . I'm a passionate software engineer with a knack for creating scalable, high-performance applications and reusable systems. With a strong foundation in front-end and back-end technologies, I specialize in crafting solutions that are as impactful for users as they are efficient for developers.`,
    card: 'summary_large_image',
    site: '@AdelGuitoun',
    images: '',
  },
  verification: {
    google: 'k83JtkKiU8MvRqLS05NLwZPSOGLJXbZpzln4wdJ-iPI',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${silkscreen.variable} relative`}>
        <NavBar />
        <main>{children}</main>
       
        <div className="main-mask pointer-events-none absolute inset-0 -z-50" />
      </body>
    </html>
  );
}
