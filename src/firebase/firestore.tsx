import { auth, firebase } from "./firebase";
import {
  getFirestore,
  collection,
  getDocs,
  limit,
  query,
  QueryConstraint,
  where,
  getDoc,
  doc,
  DocumentReference,
  Timestamp,
  setDoc,
  addDoc,
} from "firebase/firestore";
import {
  COLLECTION_EMAIL_SUBSCRIBERS,
  COLLECTION_PRODUCTS,
  COLLECTION_USERS,
} from "./firebase_constants";
import { Product } from "@/interfaces";

const firestore = getFirestore(firebase);

export const getCollection = async <T,>(collectionName: string) => {
  let datas: any[] = [];

  try {
    const docs = await getDocs(
      query(
        collection(firestore, collectionName),
        // where("isDeleted", "!=", true),
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

export const getProduct = async (productId: string) => {
  const docRef = doc(firestore, COLLECTION_PRODUCTS, productId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!", "getProduct");
  }
};

export const createUserRecord = async (
  userId: string,
  email: string,
  displayName: string
) => {
  await setDoc(doc(firestore, COLLECTION_USERS, userId), {
    email: email,
    createdAt: Timestamp.now(),
    displayName: displayName,
    userId: userId,
  });
};

export const createEmailSubscriber = async (
  displayName: string,
  email: string
) => {
  const docRef = await addDoc(
    collection(firestore, COLLECTION_EMAIL_SUBSCRIBERS),
    {
      email: email,
      createdAt: Timestamp.now(),
      displayName: displayName,
    }
  );
  console.log(docRef.id);
  return docRef.id;
};
