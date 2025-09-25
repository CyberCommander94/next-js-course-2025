import { FC } from "react";
import WaveBarsLoader from "@/components/loaders/wave-bars-loader";

const RacketPageLoader: FC = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full h-full lg:w-9/12 px-6 lg:px-0 py-5 md:py-10">
        <WaveBarsLoader />
      </div>
    </div>
  );
};

export default RacketPageLoader;
