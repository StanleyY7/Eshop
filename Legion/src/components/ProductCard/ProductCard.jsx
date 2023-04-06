import styles from "./ProductCard.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";

const ProductCard = () => {
  const { products, setSelectedProduct } = useContext(ProductContext);
  const [setClicked] = useState(false);

  return (
    <>
      {products &&
        products.map((product) => {
          return (
            <NavLink
              className={styles.link}
              to={`/Eshop/product/${product.ID}`}
              key={product.ID}
            >
              <section
                key={product.ID}
                className={styles.productCard__container}
                onClick={() => {
                  setSelectedProduct(product);
                  setClicked(true);
                }}
              >
                <div className={styles.productCard__grid}>
                  <div className={styles.productCard__imageContainer}>
                    <img
                      className={styles.productCard__image}
                      src={product.Image}
                    />
                  </div>
                  <p> {product.Name}</p>
                  <p> ${product.PPU}</p>
                </div>
              </section>
            </NavLink>
          );
        })}
    </>
  );
};

export default ProductCard;
