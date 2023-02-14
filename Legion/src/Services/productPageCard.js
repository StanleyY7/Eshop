import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect } from "react";

// Functions

// decrement for productPageCard

export const decrementQuantity = (selectedProduct) => {
  selectedProduct.Quantity--;
};

export const favouriteAProduct = (selectedProduct, favouriteClicked) => {
  useEffect(() => {
    const updateFavourite = async () => {
      const collectionRef = collection(db, "products");
      const docRef = doc(collectionRef, selectedProduct.ID);
      if (favouriteClicked) {
        if (!selectedProduct.Favourited) {
          await updateDoc(docRef, { Favourited: true });
          alert("Favourited!");
        } else {
          await updateDoc(docRef, { Favourited: false });
          alert("No Longer Favourited!");
        }
      }
    };
    updateFavourite();
  }, [favouriteClicked]);
};
