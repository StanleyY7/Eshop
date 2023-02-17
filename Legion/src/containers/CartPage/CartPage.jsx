import SocialSection from "../../components/SocialSection/SocialSection";


import { startPageAtTop } from "../../Services/general";
import CartList from "../../components/CartList/CartList";

const CartPage = () => {


  startPageAtTop();

  return (
    <>
      <CartList/>
        <SocialSection />      
    </>
  );
};

export default CartPage;
