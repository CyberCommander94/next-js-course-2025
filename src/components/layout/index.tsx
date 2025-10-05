import { FC, PropsWithChildren } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTopButton from '@/components/scroll-to-top-button';
import type { Theme } from '@/types/theme';
interface LayoutProps {
  initialTheme: Theme;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ initialTheme, children }) => {
  return (
    <>
      <Header initialTheme={initialTheme} />
      <main className="w-full h-full">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
