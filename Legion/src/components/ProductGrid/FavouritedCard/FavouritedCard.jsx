import "../ProductCard/ProductCard.css";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ProductContext } from "../../ProductProvider/ProductContext/ProductContext";

const FavouritedCard = ({ favouritedProducts }) => {
  const { products, setSelectedProduct } = useContext(ProductContext);
  const [clicked, setClicked] = useState(false);

  return (
    <div className="favourited-wrapper">
      {favouritedProducts &&
        favouritedProducts.map((product, index) => {
          return (
            <NavLink
              className="link"
              to={`/Eshop/Product/${product.ID}`}
              key={index}
            >
              <section
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
  );
};

export default FavouritedCard;