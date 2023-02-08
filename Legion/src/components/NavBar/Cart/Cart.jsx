import "./Cart.css";
import CartImage from "../../../assets/cart.png";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <section className="cart__container">
        <div className="cart__image-container">
          <NavLink to="/Eshop/Cart">
            <img className="cart__image" src={CartImage} />
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Cart;
