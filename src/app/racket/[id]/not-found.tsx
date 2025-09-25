import { FC } from "react";
import { ArrowLeft } from "lucide-react"
import Link from "next/link";

const NotFound: FC = () => {
  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="flex flex-col items-center w-full h-full lg:w-9/12 py-5 px-6 lg:px-0">
        <section className="flex flex-col justify-center items-center w-full h-full">
          <h2 className="text-9xl">404</h2>
          <h2 className="font-light text-2xl mt-3">ракетка не найдена</h2>
          <Link href="/" className="font-light flex gap-1 items-center hover:text-muted-foreground mt-20">
            <ArrowLeft strokeWidth={1} />
            <span>Вернуться на главную</span>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default NotFound;
