import Header from "../../components/Header/Header";
import SocialSection from "../../components/SocialSection/SocialSection";
import Footer from "../../components/Footer/Footer";
import "./CartPage.css";

const CartPage = () => {
  return (
    <>
      <Header />
      <section className="CartPage__content-container">
        <h1>Checkout</h1>
        <h2>Currently your cart is empty.</h2>
      </section>
      <SocialSection />
      <Footer />
    </>
  );
};

export default CartPage;
