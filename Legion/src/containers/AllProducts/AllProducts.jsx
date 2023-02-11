import "./AllProducts.css";

import ProductGrid from "../../components/ProductGrid/productGrid";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SocialSection from "../../components/SocialSection/SocialSection";

import { startPageAtTop } from "../../Services/general";

const AllProducts = () => {
  startPageAtTop();

  return (
    <>
      <div className="page__container">
        <Header />
        <div className="start-wrapper">
          <ProductGrid />
        </div>
      </div>

      <div className="allProducts__end-wrapper">
        <SocialSection />
        <Footer />
      </div>
    </>
  );
};

export default AllProducts;
