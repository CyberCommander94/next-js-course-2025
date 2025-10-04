import { FC } from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis shop: 404",
  description: "Запрашиваемая ракетка не найдена",
};

const NotFound: FC = () => {
  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="flex flex-col items-center w-full h-full lg:w-9/12 py-5 px-6 lg:px-0">
        <section className="flex flex-col justify-center items-center w-full h-full text-center">
          <h2 className="text-4xl mb-4 font-light">404</h2>
          <p className="mb-6 font-light">Запрашиваемая ракетка не найдена</p>
          <Link href="/rackets" className="cursor-pointer font-light px-4 py-2 border border-foreground dark:border-input/50 bg-transparent hover:bg-foreground dark:hover:bg-input/30 text-foreground hover:text-background dark:hover:text-foreground">
            Вернуться к списку ракеток
          </Link>
        </section>
      </div>
    </div>
  );
}

export default NotFound;
