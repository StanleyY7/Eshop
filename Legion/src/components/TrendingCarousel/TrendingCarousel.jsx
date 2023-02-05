import { useState } from "react";
import "./TrendingCarousel.css";
import ProductCard from "../ProductGrid/ProductCard/ProductCard";

const TrendingCarousel = ({ products, setSelectedProduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const favouritedProducts = products.filter(
    (product) => product.Favourited === true
  );

  return (
    <>
      <section className="trendingCarousel__container">
        <h2 className="trendingCarousel__heading">Trending Styles</h2>
        <div className="trendingCarousel__grid">
          <div>
            <button> ⮜ </button>
          </div>
          <div>
            {favouritedProducts[currentIndex] && (
              <ProductCard
                favouritedProducts={[
                  favouritedProducts[currentIndex],
                  favouritedProducts[currentIndex + 1],
                  favouritedProducts[currentIndex + 2],
                ]}
                currentIndex={currentIndex}
                setSelectedProduct={setSelectedProduct}
              />
            )}
          </div>
          <div>
            <button> ⮞ </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingCarousel;
