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

// Functions For Cart Page

// Fetching data from Cart Collection

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

// Adding/Updating data to Cart Collection

export const addCart = async (selectedProduct, selectedSize) => {
  try {
    const docRef = doc(db, "Cart", selectedProduct.ID);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      await updateDoc(docRef, {
        Amount: increment(1),
        Size: `${selectedSize}`,
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
        Size: [selectedSize],
        Amount: 1,
      });
      console.log("product added to cart, ID:", selectedProduct.ID);
      alert(`${selectedProduct.Name} has been added to the cart!`);
    }
  } catch (e) {
    console.log("Error adding to cart", e);
  }
};

// Updating/Removing data from Cart Collection

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
      console.log("Product removed from cart, ID: ", selectedProduct.ID);
      alert(`${selectedProduct.Name} deleted from cart!`);
    }
  } catch (e) {
    console.log("Error: ", e);
  }
};

// Total Price

export const total = (cartData) => {
  const totalPrice = cartData
    .map((item) => item.Price * item.Amount)
    .reduce((a, b) => a + b, 0);
  if (totalPrice > 0) {
    return totalPrice;
  } else {
    return "0, get shopping!";
  }
};
