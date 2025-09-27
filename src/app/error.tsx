"use client"

import { FC } from "react";

const Error: FC = () => {
  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="flex flex-col items-center w-full h-full lg:w-9/12 py-5 px-6 lg:px-0">
        <section className="flex flex-col justify-center items-center w-full h-full text-center">
          <h2 className="text-2xl md:text-4xl 2xl:text-6xl">Упс. Что-то пошло не так...</h2>
          <h2 className="font-light text-base md:text-2xl 2xl:text-3xl mt-3 md:mt-5 2xl:mt-7">непредвиденная ошибка работы приложения</h2>
        </section>
      </div>
    </div>
  );
}

export default Error;
