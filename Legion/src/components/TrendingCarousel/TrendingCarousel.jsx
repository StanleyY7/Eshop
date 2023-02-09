import { useState } from "react";
import "./TrendingCarousel.css";
import ProductCard from "../ProductGrid/ProductCard/ProductCard";
import { next, previous } from "../../Services/carousel";

const TrendingCarousel = ({ products, setSelectedProduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const favouritedProducts = products.filter(
    (product) => product.Favourited === true
  );

  return (
    <>
      <div className="trendingCarousel__container">
        <h2 className="trendingCarousel__heading">Trending Styles</h2>
        <div className="trendingCarousel__grid">
          <div>
            <button
              className="previous-button"
              onClick={() =>
                previous(currentIndex, favouritedProducts, setCurrentIndex)
              }
            >
              ⮜
            </button>
          </div>
          <div className="trendingCarousel__content-container">
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
                setSelectedProduct={setSelectedProduct}
              />
            )}
          </div>
          <div>
            <button
              className="next-button"
              onClick={() =>
                next(currentIndex, favouritedProducts, setCurrentIndex)
              }
            >
              ⮞
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingCarousel;
