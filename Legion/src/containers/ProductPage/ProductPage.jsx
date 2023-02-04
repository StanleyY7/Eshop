import Header from "../../components/Header/Header";
import ProductPageCard from "../../components/ProductGrid/ProductPageCard/ProductPageCard";
import "./ProductPage.css";

const ProductPage = ({ selectedProduct }) => {
  return (
    <>
      <div>
        <Header />
        <ProductPageCard selectedProduct={selectedProduct} />
      </div>
    </>
  );
};

export default ProductPage;
