import {
  getDoc,
  setDoc,
  doc,
  updateDoc,
  collection,
  increment,
  deleteDoc,
  arrayUnion,
} from "@firebase/firestore";
import { db } from "../firebase-config";
import { useEffect } from "react";
import { onSnapshot } from "@firebase/firestore";

// Functions For Cart Page

// Fetching data from Cart Collection

export const getProductsFromCart = (setCartData) => {
  useEffect(() => {
    const cartProductsCollection = collection(db, "Cart");
    const renderOnChange = onSnapshot(cartProductsCollection, (snapshot) => {
      const mappedCartData = snapshot.docs.map((doc) => doc.data());
      setCartData(mappedCartData);
      console.log(mappedCartData);
    });

    return () => renderOnChange();
  }, []);
};

// Adding/Updating data to Cart Collection

export const addCart = async (
  selectedProduct,
  selectedSize,
  addButtonClicked
) => {
  try {
    const docRef = doc(db, "Cart", selectedProduct.ID);
    const productRef = doc(db, "products", selectedProduct.ID);

    const docSnapshot = await getDoc(docRef);
    if (selectedProduct.Quantity > 0) {
      await updateDoc(productRef, {
        Quantity: increment(-1),
      });
      if (addButtonClicked) {
        if (selectedProduct.Amount < selectedProduct.Quantity) {
          await updateDoc(docRef, {
            Amount: increment(1),
          });
        } else {
          await updateDoc(productRef, {
            Quantity: 0,
          });
          alert("No more stock. Please order something else");
        }
      }

      if (docSnapshot.exists()) {
        await updateDoc(docRef, {
          Amount: increment(1),
          Size: arrayUnion(selectedSize),
        });

        console.log("Another product added to cart, ID:", selectedProduct.ID);
        alert(`${selectedProduct.Name} has been added to the cart!`);
      } else {
        await setDoc(docRef, {
          ID: selectedProduct.ID,
          Name: selectedProduct.Name,
          Price: selectedProduct.PPU,
          Quantity: selectedProduct.Quantity - 1,
          Image: selectedProduct.Image,
          Size: [selectedSize],
          Amount: increment(1),
        });
        console.log("product added to cart, ID:", selectedProduct.ID);
        alert(`${selectedProduct.Name} has been added to the cart!`);
      }
    } else {
      alert("Product is out of stock!");
      await updateDoc(productRef, {
        Quantity: 0,
      });
    }
  } catch (e) {
    console.log("Error adding to cart", e);
  }
};

// Updating/Removing data from Cart Collection

export const minusCart = async (selectedProduct, selectedSize) => {
  try {
    const docRef = doc(db, "Cart", selectedProduct.ID);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists() && selectedProduct.Amount > 1) {
      const sizeList = docSnapshot.data().Size;
      sizeList.splice(sizeList.indexOf(selectedSize), 1);
      await updateDoc(docRef, {
        Amount: increment(-1),
        Size: sizeList,
      });
      console.log("Product size removed from cart, ID: ", selectedProduct.ID);
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
