import { FC } from "react";
import { Suspense } from 'react';
import Top10RacketsListLoader from "@/components/pages/home/top-10-rackets-list/loader"
import Top10RacketsListContainer from "@/components/pages/home/top-10-rackets-list/container"
import HomePageRacketsListLoader from "@/components/pages/home/home-page-rackets-list/loader"
import HomePageRacketsListContainer from "@/components/pages/home/home-page-rackets-list/container"

const Home: FC = async () => {
  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="flex flex-col items-center w-full h-full lg:w-9/12 py-4 px-6 lg:px-0 gap-4">
        <section className="flex justify-between items-center w-full mt-2">
          <h2 className="font-light text-base md:text-2xl">Топ 10 ракеток нашего магазина</h2>
        </section>
        <Suspense fallback={<Top10RacketsListLoader />}>
          <Top10RacketsListContainer />
        </Suspense>
        <hr className="border-0 h-px bg-sidebar-ring w-full my-5" />
        <section className="flex justify-between items-center w-full mt-3">
          <h2 className="font-light text-base md:text-2xl">Большой выбор ракеток на любой вкус</h2>
        </section>
        <Suspense fallback={<HomePageRacketsListLoader />}>
          <HomePageRacketsListContainer />
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
