import "./ProductPageCard.css";
import { db } from "../../../firebase-config";
import { useState } from "react";
import { getDoc, setDoc, doc } from "@firebase/firestore";

const ProductPageCard = ({ toggle, selectedProduct }) => {
  const [selectedSize, setSelectedSize] = useState(selectedProduct.Sizes[0]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const addCart = async () => {
    try {
      const docRef = doc(db, "Cart", selectedProduct.ID);
      const docSnapshot = await getDoc(docRef);
      let amount = 1;
      if (docSnapshot.exists) {
        amount = docSnapshot.data().Amount + 1;
        await setDoc(docRef, {
          Name: selectedProduct.Name,
          Price: selectedProduct.PPU,
          Quantity: selectedProduct.Quantity,
          Image: selectedProduct.Image,
          Size: selectedSize,
          Amount: amount,
        });
        console.log("Another product added to cart, ID:", selectedProduct.ID);
        alert(`${selectedProduct.Name} has been added to the cart!`);
      } else {
        await setDoc(docRef, {
          Name: selectedProduct.Name,
          Price: selectedProduct.PPU,
          Quantity: selectedProduct.Quantity,
          Image: selectedProduct.Image,
          Size: selectedSize,
          Amount: selectedProduct.Amount + 1,
        });
        console.log("product added to cart, ID:", selectedProduct.ID);
        alert(`${selectedProduct.Name} has been added to the cart!`);
      }
    } catch (e) {
      console.log("Error adding to cart", e);
    }
  };

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
                  <select value={selectedSize} onChange={handleSizeChange}>
                    {selectedProduct.Sizes &&
                      selectedProduct.Sizes.map((size) => (
                        <option key={size}>{size}</option>
                      ))}
                  </select>
                </div>
                <p>{selectedProduct.Quantity} in Stock</p>
                <button className="add-button" onClick={addCart}>
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
