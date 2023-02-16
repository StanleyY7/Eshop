import styles from "./ProductPage.module.scss";

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
        <div className={styles.productPageCardWrapper}>
          <ProductPageCard />
        </div>
      </div>

      <div className={styles.endContainer}>
        <div className={styles.endWrapper}>
          <SocialSection />
        </div>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
