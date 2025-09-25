import { FC } from "react";

const currentYear = new Date().getFullYear();

const AppFooter: FC = () => {
  return (
    <footer className="w-full">
      <div className="w-full flex justify-center items-center bg-background">
        <div className="flex justify-between items-center w-full lg:w-9/12 py-4 px-6 lg:px-0">
          <p className="font-light text-xs md:text-normal uppercase tracking-tighter bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 text-transparent bg-clip-text">Tennis store</p>
          <p className="font-light text-xs md:text-sm">© {currentYear}, Tennis Store, All right reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
