import Header from "../../components/Header/Header";
import Cover from "../../components/Cover/Cover";
import ProductGrid from "../../components/ProductGrid/productGrid";
import SocialSection from "../../components/SocialSection/SocialSection";
import TrendingCarousel from "../../components/TrendingCarousel/TrendingCarousel";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

const HomePage = ({ products, setSelectedProduct }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Cover />
      <ProductGrid
        products={products}
        setSelectedProduct={setSelectedProduct}
      />
      <SocialSection />
      <TrendingCarousel />
      <Footer />
    </>
  );
};

export default HomePage;
