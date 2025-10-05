import { FC, PropsWithChildren } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTopButton from '@/components/scroll-to-top-button';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full h-full">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
