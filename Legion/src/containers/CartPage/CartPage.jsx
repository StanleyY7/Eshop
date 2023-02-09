import Header from "../../components/Header/Header";
import SocialSection from "../../components/SocialSection/SocialSection";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";

import "./CartPage.css";
import { getDocs, collection } from "@firebase/firestore";

const CartPage = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getCartProducts = async () => {
      const cartProductsCollection = collection(db, "Cart");
      const getCartData = await getDocs(cartProductsCollection);
      const mappedCartData = getCartData.docs.map((doc) => doc.data());
      setCartData(mappedCartData);
      console.log(mappedCartData);
    };
    getCartProducts();
  }, []);

  return (
    <>
      <Header />
      <section className="CartPage__content-container">
        <div className="CartPage__text">
          <h1>Checkout</h1>
          <div>
            {cartData ? (
              cartData.map((cartProduct, index) => {
                return (
                  <section key={index} className="cartProduct__container">
                    <div className="cartProduct__grid">
                      <img
                        className="cartProduct__image"
                        src={cartProduct.Image}
                      />
                      <p>{cartProduct.Name}</p>
                      <p>{cartProduct.Size}</p>
                      <p>${cartProduct.Price}</p>
                      <div className="cartProduct_buttons">
                        <button>-</button>
                        <button>+</button>
                      </div>
                    </div>
                  </section>
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
