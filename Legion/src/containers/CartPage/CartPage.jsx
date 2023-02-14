import "./CartPage.css";

import Header from "../../components/Header/Header";
import SocialSection from "../../components/SocialSection/SocialSection";
import Footer from "../../components/Footer/Footer";

import { useState, useContext } from "react";

import { startPageAtTop } from "../../Services/general";
import { total, minusCart, addCart } from "../../Services/cart";
import { ProductContext } from "../../components/ProductProvider/ProductContext/ProductContext";

const CartPage = () => {
  const { cartData, buttonClicked, setButtonClicked, addButtonClicked } =
    useContext(ProductContext);
  const [displayNone, setDisplayNone] = useState(false);

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
      <div className="cartPage__end-wrapper">
        <SocialSection />
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
