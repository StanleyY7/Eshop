import { useState } from "react";
import { fetchProducts } from "../../Services/products";
import { getProductsFromCart } from "../../Services/cart";
import { ProductContext } from "./ProductContext/ProductContext";

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(null);
  const addButtonClicked = true;
  fetchProducts(setProducts);
  getProductsFromCart(setCartData, buttonClicked);

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        products,
        setProducts,
        cartData,
        setCartData,
        buttonClicked,
        setButtonClicked,
        addButtonClicked,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
