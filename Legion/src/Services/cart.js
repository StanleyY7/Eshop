import {
  getDoc,
  setDoc,
  doc,
  updateDoc,
  collection,
  getDocs,
  increment,
  deleteDoc,
} from "@firebase/firestore";
import { db } from "../firebase-config";
import { useEffect } from "react";
import { async } from "@firebase/util";

export const getProductsFromCart = (setCartData) => {
  useEffect(() => {
    const getCartProducts = async () => {
      const cartProductsCollection = collection(db, "Cart");
      const getCartData = await getDocs(cartProductsCollection);
      const mappedCartData = getCartData.docs.map((doc) => doc.data());
      setCartData(mappedCartData);
      console.log(mappedCartData);
    };
    getCartProducts();
  }, []);
};

export const addCart = async (selectedProduct, selectedSize) => {
  try {
    const docRef = doc(db, "Cart", selectedProduct.ID);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      await updateDoc(docRef, {
        Amount: increment(1),
        Size: selectedSize,
      });
      console.log("Another product added to cart, ID:", selectedProduct.ID);
      alert(`${selectedProduct.Name} has been added to the cart!`);
    } else {
      await setDoc(docRef, {
        ID: selectedProduct.ID,
        Name: selectedProduct.Name,
        Price: selectedProduct.PPU,
        Quantity: selectedProduct.Quantity,
        Image: selectedProduct.Image,
        Size: selectedSize,
        Amount: 1,
      });
      console.log("product added to cart, ID:", selectedProduct.ID);
      alert(`${selectedProduct.Name} has been added to the cart!`);
    }
  } catch (e) {
    console.log("Error adding to cart", e);
  }
};

export const minusCart = async (selectedProduct) => {
  try {
    const docRef = doc(db, "Cart", selectedProduct.ID);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists() && selectedProduct.Amount > 1) {
      await updateDoc(docRef, {
        Amount: increment(-1),
      });
      console.log("Product removed from cart, ID: ", selectedProduct.ID);
      alert(`${selectedProduct.Name} removed from cart!`);
    } else {
      await deleteDoc(docRef);
    }
    console.log("Product removed from cart, ID: ", selectedProduct.ID);
    alert(`${selectedProduct.Name} deleted from cart!`);
  } catch (e) {
    console.log("Error: ", e);
  }
};
