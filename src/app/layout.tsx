import "@/assets/styles/globals.css";
import { FC } from "react";
import { cookies } from "next/headers";
import NextTopLoader from 'nextjs-toploader';
import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Tennis shop",
  description: "Лучший интернент магазин товаров для тенниса",
};

const RootLayout: FC<Readonly<{children: React.ReactNode;}>
> = async ({ children }) => {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value === "dark" ? "dark" : "light";

  return (
    <html lang='en' className={theme === "dark" ? "dark" : ""} data-scroll-behavior="smooth">
      <body className="grid [grid-template-rows:auto_1fr_auto] w-screen h-screen">
        <NextTopLoader color="#e7000b" showSpinner={false} shadow={false} height={4} />
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
