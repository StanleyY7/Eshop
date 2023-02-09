import Header from "../../components/Header/Header";
import SocialSection from "../../components/SocialSection/SocialSection";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

import "./CartPage.css";
import { startPageAtTop } from "../../Services/general";
import { getProductsFromCart, addCart } from "../../Services/cart";
import { minusCart } from "../../Services/cart";

const CartPage = () => {
  const [cartData, setCartData] = useState([]);
  const [displayNone, setDisplayNone] = useState(false);

  getProductsFromCart(setCartData);
  startPageAtTop();

  return (
    <>
      <Header />
      <section className="CartPage__content-container">
        <div className="CartPage__text">
          <h1>Checkout</h1>
          <div>
            {cartData ? (
              cartData.map((cartProduct) => {
                return (
                  <div
                    key={cartProduct.ID}
                    className={`${displayNone ? "hide" : "show"}`}
                  >
                    {cartProduct.Amount >= 1 ? (
                      <section
                        key={cartProduct.ID}
                        className="cartProduct__container"
                      >
                        <div className="cartProduct__grid">
                          <img
                            className="cartProduct__image"
                            src={cartProduct.Image}
                          />
                          <p>{cartProduct.Name}</p>
                          <p>{cartProduct.Size}</p>
                          <p>${cartProduct.Price}</p>
                          <div className="cartProduct_buttons">
                            <button onClick={() => minusCart(cartProduct)}>
                              -
                            </button>
                            <button
                              onClick={() =>
                                addCart(cartProduct, cartProduct.Size)
                              }
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
              })
            ) : (
              <h2>Your Cart is empty</h2>
            )}
          </div>
        </div>
      </section>
      <div className="cartPage__end-wrapper">
        <SocialSection />
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
