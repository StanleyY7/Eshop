import "./ProductPageCard.css";
import { useState } from "react";

import Dropdown from "./Dropdown/Dropdown";
import { addCart } from "../../../Services/cart";

const ProductPageCard = ({ toggle, selectedProduct }) => {
  const [selectedSize, setSelectedSize] = useState(selectedProduct.Sizes[0]);

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
                  selectedProduct={selectedProduct}
                  setSelectedSize={setSelectedSize}
                />

                <p>{selectedProduct.Quantity} in Stock</p>
                <button
                  className="add-button"
                  onClick={() => addCart(selectedProduct, selectedSize)}
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
