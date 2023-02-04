import "./App.css";

import AllProducts from "./containers/AllProducts/AllProducts";

import HomePage from "./containers/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./containers/ProductPage/ProductPage";

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
            path="/"
            element={
              <HomePage
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            }
          />
          <Route path="/Kit" element={<AllProducts />} />
          <Route
            path="/Product/:id"
            element={<ProductPage selectedProduct={selectedProduct} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
