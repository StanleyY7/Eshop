import Header from "../../components/Header/Header";
import Cover from "../../components/Cover/Cover";
import ProductGrid from "../../components/ProductGrid/productGrid";
import SocialSection from "../../components/SocialSection/SocialSection";
import TrendingCarousel from "../../components/TrendingCarousel/TrendingCarousel";
import Footer from "../../components/Footer/Footer";

import { startPageAtTop } from "../../Services/general";

const HomePage = ({ products, setSelectedProduct }) => {
  startPageAtTop;
  return (
    <>
      <Header />
      <Cover />
      <ProductGrid
        products={products}
        setSelectedProduct={setSelectedProduct}
      />
      <SocialSection />
      <TrendingCarousel
        products={products}
        setSelectedProduct={setSelectedProduct}
      />
      <Footer />
    </>
  );
};

export default HomePage;
