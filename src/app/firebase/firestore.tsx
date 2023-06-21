import { firestore } from "./firebase";
import {
  getFirestore,
  collection,
  getDocs,
  limit,
  query,
  QueryConstraint,
  where,
} from "firebase/firestore";
import { COLLECTION_PRODUCTS } from "./firebase_constants";
import { Product } from "@/interfaces";

// const firestore = getFirestore(firebase);

export const getCollection = async <T,>(collectionName: string) => {
  let datas: any[] = [];

  try {
    const docs = await getDocs(
      query(
        collection(firestore, collectionName),
        where("isDeleted", "!=", true),
        limit(15)
      )
    );

    docs.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      datas.push({
        id,
        ...data,
        createdAt: new Date(data?.createdAt?.seconds * 1000) || null,
        updatedAt: new Date(data?.updatedAt?.seconds * 1000) || null,
      });
    });
    return datas as T[];
  } catch (error) {
    console.log(error, "getCollection");
  }
};

export const getAllProducts = async () => getCollection(COLLECTION_PRODUCTS);
