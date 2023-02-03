import "./App.css";

import Header from "./components/Header/Header";
import ProductGrid from "./components/ProductGrid/productGrid";
import SocialSection from "./components/SocialSection/SocialSection";
import TrendingCarousel from "./components/TrendingCarousel/TrendingCarousel";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
      <ProductGrid />
      <SocialSection />
      <TrendingCarousel />
      <Footer />
    </>
  );
};

export default App;
