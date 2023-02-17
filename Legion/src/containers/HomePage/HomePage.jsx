
import Cover from "../../components/Cover/Cover";
import ProductGrid from "../../components/ProductGrid/productGrid";
import SocialSection from "../../components/SocialSection/SocialSection";
import TrendingCarousel from "../../components/TrendingCarousel/TrendingCarousel";

import { startPageAtTop } from "../../Services/general";

const HomePage = () => {
  startPageAtTop();
  return (
    <>
      <Cover />
      <ProductGrid />
      <SocialSection />
      <TrendingCarousel />
    </>
  );
};

export default HomePage;
