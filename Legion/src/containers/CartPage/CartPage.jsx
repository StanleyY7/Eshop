import "./CartPage.css";

import Header from "../../components/Header/Header";
import SocialSection from "../../components/SocialSection/SocialSection";
import Footer from "../../components/Footer/Footer";

import { useState } from "react";

import { startPageAtTop } from "../../Services/general";
import {
  getProductsFromCart,
  total,
  minusCart,
  addCart,
} from "../../Services/cart";

const CartPage = () => {
  const [cartData, setCartData] = useState([]);
  const [displayNone, setDisplayNone] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [addbuttonClicked, setAddButtonClicked] = useState(false);

  getProductsFromCart(setCartData, buttonClicked);
  startPageAtTop();

  return (
    <>
      <Header />
      <section className="CartPage__content-container">
        <div className="CartPage__text">
          <h1>Checkout</h1>
          <div>
            {cartData &&
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
                          <p>{`${cartProduct.Size} `} </p>
                          <p>Price: ${cartProduct.Price}</p>
                          <p>Amount Ordered: {cartProduct.Amount}</p>
                          <div className="cartProduct_buttons">
                            <button
                              className="minus-button"
                              onClick={() => {
                                minusCart(cartProduct);
                                setButtonClicked(!buttonClicked);
                              }}
                            >
                              -
                            </button>
                            <button
                              className="plus-button"
                              onClick={() => {
                                setButtonClicked(!buttonClicked);
                                setAddButtonClicked(true);
                                addCart(
                                  cartProduct,
                                  cartProduct.Size,
                                  addbuttonClicked
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
      <div className="cartPage__end-wrapper">
        <SocialSection />
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
