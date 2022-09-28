export interface ColorProductTypes {
  id: string;
  name: string;
  value: string;
}

export interface ProductTypes {
  id: string;
  title: string;
  img: string;
  price: number;
  discount: number | null;
  colors: ColorProductTypes[];
}
