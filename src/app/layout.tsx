import type { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'DXN Store - فروشگاه محصولات طبیعی',
  description: 'فروشگاه محصولات بهداشتی، ارایشی و مکمل‌های طبیعی در اربیل کردستان عراق',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
