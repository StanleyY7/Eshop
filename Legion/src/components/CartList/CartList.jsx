import styles from "./CartList.module.scss";
import { useContext, useState } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import { total, minusCart, addCart } from "../../Services/cart";

const CartList = () => {
    const { cartData, buttonClicked, setButtonClicked, addButtonClicked } =
    useContext(ProductContext);
  const [displayNone, setDisplayNone] = useState(false);
return(
    <>
    <section className={styles.CartPage__contentContainer}>
        <div className={styles.CartPage__text}>
          <h1>Checkout</h1>
          <div>
            {cartData &&
              cartData.map((cartProduct) => {
                return (
                  <div
                    key={cartProduct.ID}
                    className={`${displayNone ? `${styles.hide}` : `${styles.show}`}`}
                  >
                    {cartProduct.Amount >= 1 ? (
                      <section
                        key={cartProduct.ID}
                        className={styles.cartProduct__container}
                      >
                        <div className={styles.cartProduct__grid}>
                          <img
                            className={styles.cartProduct__image}
                            src={cartProduct.Image}
                          />
                          <p>{cartProduct.Name}</p>
                          <p>{`${cartProduct.Size} `} </p>
                          <p>Price: ${cartProduct.Price}</p>
                          <p>Amount Ordered: {cartProduct.Amount}</p>
                          <div className={styles.cartProduct_buttons}>
                            <button
                              className={styles.minusButton}
                              onClick={() => {
                                minusCart(cartProduct);
                                setButtonClicked(!buttonClicked);
                              }}
                            >
                              -
                            </button>
                            <button
                              className={styles.plusButton}
                              onClick={() => {
                                setButtonClicked(!buttonClicked);

                                addCart(
                                  cartProduct,
                                  cartProduct.Size,
                                  addButtonClicked
                                );
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </section>
                    ) : (
                      () => setDisplayNone(true)
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            <p className="total-price">Total Price: ${total(cartData)}</p>
          </div>
        </div>
      </section>
    </>
)

}

export default CartList;