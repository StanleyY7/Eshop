import { handleSizeChange } from "../../Services/general";
import { useContext } from "react";
import { ProductContext } from "../ProductProvider/ProductContext/ProductContext";

const Dropdown = ({ selectedSize, setSelectedSize }) => {
  const { selectedProduct } = useContext(ProductContext);
  return (
    <>
      <div>
        Size:
        <select
          value={selectedSize}
          onChange={(event) => handleSizeChange(setSelectedSize, event)}
        >
          {selectedProduct.Sizes &&
            selectedProduct.Sizes.map((size) => (
              <option key={size}>{size}</option>
            ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
