import "./ProductCard.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const ProductCard = ({ products, setSelectedProduct, favouritedProducts }) => {
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
      <div className="favourited-wrapper">
        {favouritedProducts &&
          favouritedProducts.map((product) => {
            return (
              <NavLink
                className="link"
                to={`/Eshop/Product/${product.ID}`}
                key={product.ID}
              >
                <section
                  key={product.ID}
                  className="productCard__favourited-container"
                  onClick={() => {
                    setSelectedProduct(product);
                    setClicked(true);
                  }}
                >
                  <div className="productCard__favourited-grid">
                    <div className="productCard__favourited-image-container">
                      <img
                        className="productCard__favourited-image"
                        src={product.Image}
                      />
                    </div>
                    <p> {product.Name}</p>
                    <p className="ppu-text"> ${product.PPU}</p>
                  </div>
                </section>
              </NavLink>
            );
          })}
      </div>
    </>
  );
};

export default ProductCard;
