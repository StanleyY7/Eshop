import styles from "./ProductPageCard.module.scss";
import { useState, useContext, useRef } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { addCart } from "../../Services/cart";
import { ProductContext } from "../ProductContext/ProductContext";
import { decrementQuantity, favouriteAProduct } from "../../Services/products";

const ProductPageCard = () => {
  const { selectedProduct } = useContext(ProductContext);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.Sizes[0]);
  const [favouriteClicked, setFavouriteClicked] = useState(false);
  const favouriteRef = useRef();

  favouriteAProduct(
    selectedProduct,
    favouriteClicked,
    setFavouriteClicked,
    favouriteRef
  );

  return (
    <>
      <div className={`${styles.divWrapper}`}>
        {selectedProduct && (
          <section className={styles.ProductPageCard__container}>
            <div className={styles.ProductPageCard__grid}>
              <div className={styles.justifyWrapper}>
                <div className={styles.ProductPageCard__imageContainer}>
                  <img src={selectedProduct.Image} />
                </div>
              </div>

              <div className={styles.ProductPageCard__contentContainer}>
                <h2>{selectedProduct.Name}</h2>
                <p>Price: ${selectedProduct.PPU}</p>

                <Dropdown
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />

                <p>
                  {`${
                    selectedProduct.Quantity > 0
                      ? `${selectedProduct.Quantity} `
                      : "0 "
                  }`}
                  in Stock
                </p>
                <div className={styles.productPageCard__buttonContainer}>
                  <button
                    className={styles.addButton}
                    onClick={() => {
                      addCart(selectedProduct, selectedSize);
                      decrementQuantity(selectedProduct);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className={styles.favouriteButton}
                    onClick={() => {
                      setFavouriteClicked(true);
                    }}
                    ref={favouriteRef}
                  >
                    ♡
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ProductPageCard;
