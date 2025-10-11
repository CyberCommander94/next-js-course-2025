'use client';

import { FC } from 'react';
import type { Brand } from '@/types/shop-item';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSearchParams, useRouter } from 'next/navigation';

type RacketsPageToolbarProps = {
  brands: Brand[];
  currentBrand: string;
};

const RacketsPageToolbar: FC<RacketsPageToolbarProps> = ({ brands, currentBrand }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete('brand');
    } else {
      params.set('brand', value);
    }

    router.replace(`/rackets?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full flex justify-end items-center mb-2 gap-3">
      <p className="font-light">Бренд:</p>

      <Select value={currentBrand} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]" size="sm" disabled={!brands.length}>
          <SelectValue placeholder="Выберите бренд" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">Все бренды</SelectItem>
            {brands.map((br) => (
              <SelectItem key={br.id} value={String(br.name)}>
                {br.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default RacketsPageToolbar;
