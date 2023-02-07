import "./App.css";

import AllProducts from "./containers/AllProducts/AllProducts";

import HomePage from "./containers/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./containers/ProductPage/ProductPage";
import CartPage from "./containers/CartPage/CartPage";

import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const productsCollection = collection(db, "products");
      const getData = await getDocs(productsCollection);
      const dataList = getData.docs.map((doc) => doc.data());
      setProducts(dataList);
      console.log(dataList);
    };

    getProducts();
  }, []);

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
