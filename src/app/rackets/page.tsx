import { FC, Suspense } from "react";
import RacketsPageListLoader from "@/components/pages/rackets/loader";
import RacketsPageListContainer from "@/components/pages/rackets/container";

const Rackets: FC = async () => {
  return (
    <div className="w-full flex justify-center h-full">
      <div className="flex flex-col items-center w-full h-full lg:w-9/12 py-3 px-6 lg:px-0">
        <section className="flex justify-between items-center w-full mb-4 font-light">
          <h2 className="font-light text-xl md:text-2xl">Ракетки</h2>
        </section>
        <Suspense fallback={<RacketsPageListLoader />}>
          <RacketsPageListContainer />
        </Suspense>
      </div>
    </div>
  );
}

export default Rackets;
