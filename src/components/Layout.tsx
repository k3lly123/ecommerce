import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isProductDetail = location.pathname.startsWith('/product/');

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <Header isProductDetail={isProductDetail} />
      <main className="flex-grow w-full">
        {children}
      </main>
      {!isProductDetail && <Footer />}
      <MobileBottomNav />
    </div>
  );
}
