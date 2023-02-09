import "./App.css";

import AllProducts from "./containers/AllProducts/AllProducts";

import HomePage from "./containers/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./containers/ProductPage/ProductPage";
import CartPage from "./containers/CartPage/CartPage";

import { fetchProducts } from "./Services/products";

import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  fetchProducts(setProducts);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Eshop"
            element={
              <HomePage
                products={products}
                setSelectedProduct={setSelectedProduct}
              />
            }
          />
          <Route
            path="/Eshop/Kit"
            element={
              <AllProducts
                products={products}
                setSelectedProduct={setSelectedProduct}
              />
            }
          />
          <Route
            path="/Eshop/Product/:id"
            element={<ProductPage selectedProduct={selectedProduct} />}
          />

          <Route path="/Eshop/Cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
