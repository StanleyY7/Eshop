import styles from "./ProductPage.module.scss";
import ProductPageCard from "../../components/ProductPageCard/ProductPageCard";
import SocialSection from "../../components/SocialSection/SocialSection";

import { startPageAtTop } from "../../Services/general";

const ProductPage = () => {
  startPageAtTop();

  return (
    <>
      <div>
        <div className={styles.productPageCardWrapper}>
          <ProductPageCard />
        </div>
      </div>

      <div className={styles.endContainer}>
        <div className={styles.endWrapper}>
          <SocialSection />
        </div>

      </div>
    </>
  );
};

export default ProductPage;
