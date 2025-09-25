import "@/assets/styles/globals.css";
import { FC } from "react";
import Layout from "@/components/layout";

const RootLayout: FC<Readonly<{children: React.ReactNode;}>
> = ({ children }) => {
  return (
    <html lang='en'>
      <body className="grid [grid-template-rows:auto_1fr_auto] w-screen h-screen">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
