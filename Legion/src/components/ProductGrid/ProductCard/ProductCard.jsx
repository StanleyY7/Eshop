import "./ProductCard.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ProductPageCard from "../ProductPageCard/ProductPageCard";

const ProductCard = ({ products, setSelectedProduct, selectedProduct }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {products.map((product, index) => {
        return (
          <NavLink className="link" to={`/Product/${product.Name}`} key={index}>
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
                <p> {products.ID}</p>
                <p> ${product.PPU}</p>
              </div>
            </section>
            <ProductPageCard
              products={products}
              toggle={clicked ? "show" : "hideGrid"}
              selectedProduct={selectedProduct}
            />
          </NavLink>
        );
      })}
    </>
  );
};

export default ProductCard;
