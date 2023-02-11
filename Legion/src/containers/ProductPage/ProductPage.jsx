import "./ProductPage.css";

import Header from "../../components/Header/Header";
import ProductPageCard from "../../components/ProductGrid/ProductPageCard/ProductPageCard";
import SocialSection from "../../components/SocialSection/SocialSection";
import Footer from "../../components/Footer/Footer";

import { startPageAtTop } from "../../Services/general";

const ProductPage = () => {
  startPageAtTop();

  return (
    <>
      <div>
        <Header />
        <div className="productPageCard-wrapper">
          <ProductPageCard />
        </div>
      </div>

      <div className="end-container">
        <div className="end-wrapper">
          <SocialSection />
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
