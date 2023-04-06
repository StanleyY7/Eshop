import SocialSection from "../../components/SocialSection/SocialSection";

import { startPageAtTop } from "../../Services/general";
import CartList from "../../components/CartList/CartList";
import styles from "../CartPage/CartPage.module.scss";
const CartPage = () => {
  startPageAtTop();

  return (
    <>
      <CartList />
      <div className={styles.endCartWrapper} role="socialWrapper">
        <SocialSection />
      </div>
    </>
  );
};

export default CartPage;
