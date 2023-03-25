import "./App.scss";

import AllProducts from "./containers/AllProducts/AllProducts";

import HomePage from "./containers/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./containers/ProductPage/ProductPage";
import CartPage from "./containers/CartPage/CartPage";
import ProductProvider from "./components/ProductProvider/ProductProvider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/Eshop" element={<HomePage />} />
            <Route path="/Eshop/kit" element={<AllProducts />} />
            <Route path="/Eshop/product/:id" element={<ProductPage />} />

            <Route path="/Eshop/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </>
  );
};

export default App;
