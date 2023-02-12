import "./ProductPageCard.css";
import { useState, useContext } from "react";

import Dropdown from "./Dropdown/Dropdown";
import { addCart } from "../../../Services/cart";
import { ProductContext } from "../../ProductProvider/ProductContext/ProductContext";
import { fetchProducts } from "../../../Services/products";
import { decrementQuantity } from "../../../Services/productPageCard";

const ProductPageCard = ({ toggle }) => {
  const { selectedProduct, setProducts } = useContext(ProductContext);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.Sizes[0]);

  fetchProducts(setProducts);

  return (
    <>
      <div className={`wrapper ${toggle}`}>
        {selectedProduct && (
          <section className="ProductPageCard__container">
            <div className={`ProductPageCard__grid`}>
              <div className="justify-wrapper">
                <div className="ProductPageCard__image-container">
                  <img src={selectedProduct.Image} />
                </div>
              </div>

              <div className="ProductPageCard__content-container">
                <h2>{selectedProduct.Name}</h2>
                <p>Price: ${selectedProduct.PPU}</p>

                <Dropdown
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />

                <p>
                  {`${
                    selectedProduct.Quantity > 0
                      ? `${selectedProduct.Quantity} `
                      : "0 "
                  }`}
                  in Stock
                </p>
                <button
                  className="add-button"
                  onClick={() => {
                    addCart(selectedProduct, selectedSize);
                    decrementQuantity(selectedProduct);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ProductPageCard;
