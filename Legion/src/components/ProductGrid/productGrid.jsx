import styles from "./productGrid.module.scss";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = () => {
  return (
    <>
      <section className={styles.productGrid__container}>
        <h2 className={styles.productGrid__title}>All Products</h2>
        <div className={styles.wrapper}>
          <div className={styles.productGrid}>
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGrid;
