import "./Cart.css";
import CartImage from "../../../assets/cart.png";

const Cart = () => {
  return (
    <>
      <section className="cart__container">
        <div className="cart__image-container">
          <img src={CartImage} />
        </div>
      </section>
    </>
  );
};

export default Cart;
