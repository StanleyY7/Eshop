import { useState } from "react";
import "./TrendingCarousel.css";
import ProductCard from "../ProductGrid/ProductCard/ProductCard";

const TrendingCarousel = ({ products, setSelectedProduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const favouritedProducts = products.filter(
    (product) => product.Favourited === true
  );

  const next = () => {
    setCurrentIndex((currentIndex + 1) % favouritedProducts.length);
  };

  const previous = () => {
    if (currentIndex === 0) {
      setCurrentIndex((currentIndex + 1) % favouritedProducts.length);
    } else {
      setCurrentIndex((currentIndex - 1) % favouritedProducts.length);
    }
  };

  return (
    <>
      <section className="trendingCarousel__container">
        <h2 className="trendingCarousel__heading">Trending Styles</h2>
        <div className="trendingCarousel__grid">
          <div>
            <button onClick={previous}> ⮜ </button>
          </div>
          <div>
            {favouritedProducts[currentIndex] && (
              <ProductCard
                favouritedProducts={[
                  favouritedProducts[currentIndex],
                  favouritedProducts[
                    (currentIndex + 1) % favouritedProducts.length
                  ],
                  favouritedProducts[
                    (currentIndex + 2) % favouritedProducts.length
                  ],
                ]}
                currentIndex={currentIndex}
                setSelectedProduct={setSelectedProduct}
              />
            )}
          </div>
          <div>
            <button onClick={next}> ⮞ </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingCarousel;
