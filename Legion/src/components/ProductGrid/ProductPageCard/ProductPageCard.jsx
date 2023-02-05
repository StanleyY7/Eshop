import "./ProductPageCard.css";

const ProductPageCard = ({ toggle, selectedProduct }) => {
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
                <div>
                  Size:
                  <select>
                    <option>{selectedProduct.Sizes[0]}</option>
                    <option>{selectedProduct.Sizes[1]}</option>
                    <option>{selectedProduct.Sizes[2]}</option>
                    <option>{selectedProduct.Sizes[3]}</option>
                    <option>{selectedProduct.Sizes[4]}</option>
                  </select>
                </div>
                <p>{selectedProduct.Quantity} in Stock</p>
                <button className="add-button">Add to Cart</button>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ProductPageCard;
