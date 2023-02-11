import { useState } from "react";
import { fetchProducts } from "../../Services/products";
import { ProductContext } from "./ProductContext/ProductContext";

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  fetchProducts(setProducts);

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        products,
        setProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
