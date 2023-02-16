import styles from "../ProductCard/ProductCard.module.scss";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ProductContext } from "../../ProductProvider/ProductContext/ProductContext";

const FavouritedCard = ({ favouritedProducts }) => {
  const { products, setSelectedProduct } = useContext(ProductContext);
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.favouritedWrapper}>
      {favouritedProducts &&
        favouritedProducts.map((product, index) => {
          return (
            <NavLink
              className={styles.link}
              to={`/Eshop/product/${product.ID}`}
              key={index}
            >
              <section
                className={styles.productCard__favouritedContainer}
                onClick={() => {
                  setSelectedProduct(product);
                  setClicked(true);
                }}
              >
                <div className={styles.productCard__favouritedGrid}>
                  <div className={styles.productCard__favouritedImageContainer}>
                    <img
                      className={styles.productCard__favouritedImage}
                      src={product.Image}
                    />
                  </div>
                  <p> {product.Name}</p>
                  <p className={styles.ppuText}> ${product.PPU}</p>
                </div>
              </section>
            </NavLink>
          );
        })}
    </div>
  );
};

export default FavouritedCard;
