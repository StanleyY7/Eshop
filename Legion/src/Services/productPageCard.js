import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";

// Functions

// decrement for productPageCard

export const decrementQuantity = (selectedProduct) => {
  selectedProduct.Quantity--;
};

export const favouriteAProduct = (
  selectedProduct,
  favouriteClicked,
  setFavouriteClicked
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
              alert(data.Favourited ? "No Longer Favourited!" : "Favourited!");
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
