import "./ProductPageCard.css";

const ProductPageCard = ({ toggle, selectedProduct }) => {
  console.log(selectedProduct);
  return (
    <>
      <div className={toggle}>
        {selectedProduct && (
          <section className="ProductPageCard__container">
            <div className={`ProductPageCard__grid`}>
              <div className="ProductPageCard__image-container">
                <img src={selectedProduct.Image} />
              </div>

              <div className="ProductPageCard__content-container">
                <h2>{selectedProduct.Name}</h2>
                <p>Price: ${selectedProduct.PPU}</p>
                <div>
                  Size:
                  <select></select>
                </div>
                <p>{selectedProduct.Quantity} in Stock</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ProductPageCard;
