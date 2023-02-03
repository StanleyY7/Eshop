import "./productGrid.css";
import ProductCard from "./ProductCard/ProductCard";

const ProductGrid = () => {
  return (
    <>
      <section className="productGrid__container">
        <h2 className="productGrid__title">All Products</h2>
        <div className="wrapper">
          <div className="productGrid">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGrid;
