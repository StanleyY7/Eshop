import { createContext } from "react";

export const ProductContext = createContext({
  selectedProduct: {},
  setSelectedProduct: () => {},
  products: [],
  cartData: [],
  setCartData: () => {},
  buttonClicked: {},
  setButtonClicked: () => {},
  addButtonClicked: {},
});
