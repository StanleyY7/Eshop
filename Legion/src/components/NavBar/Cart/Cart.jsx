import "./Cart.css";
import CartImage from "../../../assets/cart.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../ProductProvider/ProductContext/ProductContext";
import { totalCart } from "../../../Services/cart";
const Cart = () => {
  const { cartData } = useContext(ProductContext);
  return (
    <>
      <section className="cart__container">
        <div className="cart__image-container">
          <NavLink to="/Eshop/Cart">
            <img className="cart__image" src={CartImage} />
          </NavLink>
          <div className="total-amount__container">
            <p> {totalCart(cartData)} </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
