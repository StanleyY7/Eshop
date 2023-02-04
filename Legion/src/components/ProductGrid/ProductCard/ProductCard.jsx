import "./ProductCard.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ProductPageCard from "../ProductPageCard/ProductPageCard";

const ProductCard = ({ products, setSelectedProduct }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {products &&
        products.map((product, index) => {
          return (
            <NavLink
              className="link"
              to={`/Product/${product.Name}`}
              key={index}
            >
              <section
                key={index}
                className="productCard__container"
                onClick={() => {
                  setSelectedProduct(product);
                  setClicked(true);
                }}
              >
                <div className="productCard__grid">
                  <div className="productCard__Image-container">
                    <img className="productCard__image" src={product.Image} />
                  </div>
                  <p> {product.Name}</p>
                  <p> ${product.PPU}</p>
                </div>
              </section>
            </NavLink>
          );
        })}
    </>
  );
};

export default ProductCard;
