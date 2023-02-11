import Header from "../../components/Header/Header";
import Cover from "../../components/Cover/Cover";
import ProductGrid from "../../components/ProductGrid/productGrid";
import SocialSection from "../../components/SocialSection/SocialSection";
import TrendingCarousel from "../../components/TrendingCarousel/TrendingCarousel";
import Footer from "../../components/Footer/Footer";

import { startPageAtTop } from "../../Services/general";

const HomePage = () => {
  startPageAtTop();
  return (
    <>
      <Header />
      <Cover />
      <ProductGrid />
      <SocialSection />
      <TrendingCarousel />
      <Footer />
    </>
  );
};

export default HomePage;
