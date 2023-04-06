import styles from "./AllProducts.module.scss";

import ProductGrid from "../../components/ProductGrid/productGrid";
import SocialSection from "../../components/SocialSection/SocialSection";

import { startPageAtTop } from "../../Services/general";

const AllProducts = () => {
  startPageAtTop();

  return (
    <>
      <div className={styles.page__container} role="container">
        <div className={styles.startWrapper}>
          <ProductGrid />
        </div>
      </div>

      <div className={styles.AllProducts__endWrapper} role="socialContainer">
        <SocialSection />
      </div>
    </>
  );
};

export default AllProducts;
