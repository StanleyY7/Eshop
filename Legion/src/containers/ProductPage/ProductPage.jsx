import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductPageCard from "../../components/ProductGrid/ProductPageCard/ProductPageCard";
import SocialSection from "../../components/SocialSection/SocialSection";
import "./ProductPage.css";
import { useEffect } from "react";

const ProductPage = ({ selectedProduct }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Header />
        <ProductPageCard selectedProduct={selectedProduct} />
        <SocialSection />
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
