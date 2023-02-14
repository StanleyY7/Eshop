import "./ProductPageCard.css";
import { useState, useContext } from "react";
import Dropdown from "./Dropdown/Dropdown";
import { addCart } from "../../../Services/cart";
import { ProductContext } from "../../ProductProvider/ProductContext/ProductContext";
import {
  decrementQuantity,
  favouriteAProduct,
} from "../../../Services/productPageCard";

const ProductPageCard = ({ toggle }) => {
  const { selectedProduct } = useContext(ProductContext);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.Sizes[0]);
  const [favouriteClicked, setFavouriteClicked] = useState(false);

  favouriteAProduct(selectedProduct, favouriteClicked, setFavouriteClicked);

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
                <div className="productPageCard__button-container">
                  <button
                    className="add-button"
                    onClick={() => {
                      addCart(selectedProduct, selectedSize);
                      decrementQuantity(selectedProduct);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="favourite-button"
                    onClick={() => {
                      setFavouriteClicked(true);
                    }}
                  >
                    ♡
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ProductPageCard;
