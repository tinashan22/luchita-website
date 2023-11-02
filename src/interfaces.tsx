export interface ProductRecord {
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

export interface UserRecord {
  id: number;
  name: string;
  email: number;
  isDeleted?: boolean | undefined;
}
