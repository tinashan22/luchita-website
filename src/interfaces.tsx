import { Timestamp } from "firebase/firestore";

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
  userId: string;
  name: string;
  email: string;
  createdAt: Date;
  isDeleted?: boolean | undefined;
}
