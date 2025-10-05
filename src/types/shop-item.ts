export interface IRacket {
  id: string | number;
  name: string;
  imageUrl: string;
  price: string | number;
  type: string;
  model: string;
  year: string | number;
  top10: boolean;
  description: string;
  brandId: string | number;
  brand: Brand;
  userData?: {
    isFavorite?: boolean;
  };
}

export type Brand = {
  id: string | number;
  name: string;
};
