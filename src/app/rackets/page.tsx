import { FC } from "react";
import Link from "next/link";
import { getAllItems } from "@/db/data";
import ItemCard from "@/components/ItemCard";

const Rackets: FC = () => {
  const allItems = getAllItems();

  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="flex flex-col items-center w-full h-full lg:w-9/12 py-5 px-6 lg:px-0">
        <section className="flex justify-between items-center w-full mb-8 font-light">
          <h2>Ракетки</h2>
        </section>
        <section className="flex items-center h-full w-full p-2 box-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
            {allItems.map((item) => (
              <Link key={item.id} href={`/racket/${item.id}`} className="block bg-white h-full border border-foreground transform transition-transform duration-300 hover:scale-102">
                <ItemCard item={item} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Rackets;
