import { handleSizeChange } from "../../../../Services/general";

const Dropdown = ({ selectedProduct, selectedSize, setSelectedSize }) => {
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
