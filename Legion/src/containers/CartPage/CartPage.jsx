import Header from "../../components/Header/Header";
import SocialSection from "../../components/SocialSection/SocialSection";
import Footer from "../../components/Footer/Footer";
import { useEffect, useContext } from "react";

import "./CartPage.css";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="CartPage__content-container">
        <div className="CartPage__text">
          <h1>Checkout</h1>
          <h2>Your Cart is empty</h2>
        </div>
      </section>
      <SocialSection />
      <Footer />
    </>
  );
};

export default CartPage;
