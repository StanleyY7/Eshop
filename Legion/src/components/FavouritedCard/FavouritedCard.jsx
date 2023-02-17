import styles from "./FavouritedCard.module.scss";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import {ProductContext} from "../ProductContext/ProductContext";

const FavouritedCard = ({ favouritedProducts }) => {
  const { products, setSelectedProduct } = useContext(ProductContext);
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.FavouritedCard__wrapper}>
      {favouritedProducts &&
        favouritedProducts.map((product, index) => {
          return (
            <NavLink
              className={styles.link}
              to={`/Eshop/product/${product.ID}`}
              key={index}
            >
              <section
                className={styles.FavouritedCard__container}
                onClick={() => {
                  setSelectedProduct(product);
                  setClicked(true);
                }}
              >
                <div className={styles.FavouritedCard__grid}>
                  <div className={styles.FavouritedCard__imageContainer}>
                    <img
                      className={styles.FavouritedCard__image}
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
