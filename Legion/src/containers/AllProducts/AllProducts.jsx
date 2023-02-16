import styles from "./AllProducts.module.scss";

import ProductGrid from "../../components/ProductGrid/productGrid";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SocialSection from "../../components/SocialSection/SocialSection";

import { startPageAtTop } from "../../Services/general";

const AllProducts = () => {
  startPageAtTop();

  return (
    <>
      <div className={styles.page__container}>
        <Header />
        <div className={styles.startWrapper}>
          <ProductGrid />
        </div>
      </div>

      <div className={styles.AllProducts__endWrapper}>
        <SocialSection />
        <Footer />
      </div>
    </>
  );
};

export default AllProducts;
