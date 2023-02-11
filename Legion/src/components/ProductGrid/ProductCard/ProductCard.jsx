import "./ProductCard.css";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ProductContext } from "../../ProductProvider/ProductContext/ProductContext";

const ProductCard = () => {
  const { products, setSelectedProduct } = useContext(ProductContext);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {products &&
        products.map((product) => {
          return (
            <NavLink
              className="link"
              to={`/Eshop/Product/${product.ID}`}
              key={product.ID}
            >
              <section
                key={product.ID}
                className="productCard__container"
                onClick={() => {
                  setSelectedProduct(product);
                  setClicked(true);
                }}
              >
                <div className="productCard__grid">
                  <div className="productCard__image-container">
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
