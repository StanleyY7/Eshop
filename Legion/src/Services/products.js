import { useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

// Functions for product components

// Fetching data from products collection

export const fetchProducts = (setProducts) => {
  useEffect(() => {
    const getProducts = async () => {
      const productsCollection = collection(db, "products");
      const getData = await getDocs(productsCollection);
      const dataList = getData.docs.map((doc) => doc.data());
      setProducts(dataList);
      console.log(dataList);
    };

    getProducts();
  }, []);
};
