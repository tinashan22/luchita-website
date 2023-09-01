export interface Product {
  id: number;
  name: string;
  price: number;
  type: string;
  primaryPhoto: string | undefined;
  photoList: string[];
  description: string | undefined;
  displayOrder: number | undefined;
  isDeleted?: boolean | undefined;
}
