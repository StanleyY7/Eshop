import "./TrendingCarousel.css";

import { useState, useContext } from "react";

import { next, previous } from "../../Services/carousel";
import { ProductContext } from "../ProductProvider/ProductContext/ProductContext";
import FavouritedCard from "../ProductGrid/FavouritedCard/FavouritedCard";

const TrendingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { products } = useContext(ProductContext);

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
              <FavouritedCard
                favouritedProducts={[
                  favouritedProducts[currentIndex],
                  favouritedProducts[
                    (currentIndex + 1) % favouritedProducts.length
                  ],
                  favouritedProducts[
                    (currentIndex + 2) % favouritedProducts.length
                  ],
                ]}
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
