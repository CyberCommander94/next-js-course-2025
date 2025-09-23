import { FC } from "react";
import { getAllItems } from "@/db/data";
import ItemCard from "@/components/ItemCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const Rackets: FC = () => {
  const allItems = getAllItems();

  return (
    <div className="w-full flex flex-col justify-center items-center h-full">
      <div className="w-full lg:w-9/12 py-3 px-6 lg:px-0">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Ракетки</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col items-center w-full h-full lg:w-9/12 py-3 px-6 lg:px-0">
        <section className="flex justify-between items-center w-full mb-4 font-light">
          <h2 className="font-light text-xl md:text-2xl">Ракетки</h2>
        </section>
        <section className="flex items-center h-full w-full p-2 box-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
            {allItems.map((item) => (
              <ItemCard key={item.id} item={item} url={`/racket/${item.id}`} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Rackets;
