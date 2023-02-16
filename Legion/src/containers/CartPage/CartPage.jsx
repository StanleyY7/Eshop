

import Header from "../../components/Header/Header";
import SocialSection from "../../components/SocialSection/SocialSection";
import Footer from "../../components/Footer/Footer";

import { startPageAtTop } from "../../Services/general";
import CartList from "../../components/CartList/CartList";

const CartPage = () => {


  startPageAtTop();

  return (
    <>
      <Header />

      <CartList/>

        <SocialSection />
        <Footer />
      
    </>
  );
};

export default CartPage;
