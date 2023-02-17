import { useEffect } from "react";
import { db } from "../firebase-config";

import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";

// Functions for product components

// Fetching data from products collection

export const fetchProducts = (setProducts) => {
  useEffect(() => {
    const fetchData = async () => {
      const productsCollection = collection(db, "products");
      const reRender = onSnapshot(productsCollection, async (snapshot) => {
        const dataList = snapshot.docs.map((doc) => doc.data());
        await setProducts(dataList);
        console.log(dataList);
      });

      return () => reRender();
    };
    fetchData();
  }, []);
};

// decrement for productPageCard

export const decrementQuantity = (selectedProduct) => {
  selectedProduct.Quantity--;
};

export const favouriteAProduct = (
  selectedProduct,
  favouriteClicked,
  setFavouriteClicked,
  favouriteRef
) => {
  useEffect(() => {
    const collectionRef = collection(db, "products");
    const docRef = doc(collectionRef, selectedProduct.ID);

    const updateFavourited = onSnapshot(docRef, (doc) => {
      if (doc.exists() && favouriteClicked) {
        setFavouriteClicked(false);
        const data = doc.data();
        if (favouriteClicked) {
          updateDoc(docRef, { Favourited: !data.Favourited })
            .then(() => {
              if(data.Favourited){
                alert("No Longer Favourited!");
                favouriteRef.current.style.color="white";
              } else {
                favouriteRef.current.style.color="red";
                alert("Favourited!")
              }
            })
            .catch((error) => {
              console.error("Error updating document: ", error);
            });
        }
      }
    });

    return () => {
      // Clean up snapshot listener
      updateFavourited();
    };
  }, [selectedProduct.ID, favouriteClicked]);
};
