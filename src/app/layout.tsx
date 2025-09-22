import "@/assets/styles/globals.css";
import { FC } from "react";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";


const RootLayout: FC<Readonly<{children: React.ReactNode;}>
> = ({ children }) => {
  return (
    <html lang='en'>
      <body className="grid [grid-template-rows:auto_1fr_auto] w-screen h-screen">
        <AppHeader />
        <main className="w-full h-full">
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
};

export default RootLayout;
