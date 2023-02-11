import { useEffect } from "react";
import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

// Functions for product components

// Fetching data from products collection

export const fetchProducts = (setProducts) => {
  useEffect(() => {
    const productsCollection = collection(db, "products");
    const reRender = onSnapshot(productsCollection, (snapshot) => {
      const dataList = snapshot.docs.map((doc) => doc.data());
      setProducts(dataList);
      console.log(dataList);
    });

    return () => reRender();
  }, []);
};
