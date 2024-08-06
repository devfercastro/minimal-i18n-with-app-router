import { i18n, type Locale } from '@/i18n-config';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import Navbar from './Navbar';
import './globals.css';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={lang}>
      <body className={nunitoSans.className}>
        <Navbar lang={lang} />
        {children}
      </body>
    </html>
  );
}
