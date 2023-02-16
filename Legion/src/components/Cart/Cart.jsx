import styles from "./Cart.module.scss";
import CartImage from "../../assets/cart.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../components/ProductProvider/ProductContext/ProductContext";
import { totalCart } from "../../Services/cart";
const Cart = () => {
  const { cartData } = useContext(ProductContext);
  return (
    <>
      <section className={styles.cart__container}>
        <div className={styles.image__container}>
          <NavLink to="/Eshop/cart">
            <img className={styles.cart__image} src={CartImage} />
          </NavLink>
          <div className={styles.amount__container}>
            <p> {totalCart(cartData)} </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
