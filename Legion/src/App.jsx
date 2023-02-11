import "./App.css";

import AllProducts from "./containers/AllProducts/AllProducts";

import HomePage from "./containers/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./containers/ProductPage/ProductPage";
import CartPage from "./containers/CartPage/CartPage";
import ProductProvider from "./components/ProductProvider/ProductProvider";

const App = () => {
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Eshop" element={<HomePage />} />
            <Route path="/Eshop/Kit" element={<AllProducts />} />
            <Route path="/Eshop/Product/:id" element={<ProductPage />} />

            <Route path="/Eshop/Cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  );
};

export default App;
