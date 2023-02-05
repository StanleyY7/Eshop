import "./AllProducts.css";
import ProductGrid from "../../components/ProductGrid/productGrid";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SocialSection from "../../components/SocialSection/SocialSection";
import { useEffect } from "react";

const AllProducts = ({ products, setSelectedProduct }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="page__container">
        <Header />
        <div className="wrapper">
          <ProductGrid
            products={products}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
      </div>
      <SocialSection />
      <Footer />
    </>
  );
};

export default AllProducts;