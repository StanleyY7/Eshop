import styles from "./TrendingCarousel.module.scss";

import { useState, useContext } from "react";

import { next, previous } from "../../Services/general";
import { ProductContext } from "../ProductContext/ProductContext";

import FavouritedCard from "../FavouritedCard/FavouritedCard";

const TrendingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { products } = useContext(ProductContext);

  const favouritedProducts = products.filter(
    (product) => product.Favourited === true
  );

  return (
    <>
      <div className={styles.TrendingCarousel__container}>
        <h2 className={styles.TrendingCarousel__heading}>Trending Styles</h2>
        <div className={styles.TrendingCarousel__grid}>
          <div>
            <button
              className={styles.previousButton}
              onClick={() =>
                previous(currentIndex, favouritedProducts, setCurrentIndex)
              }
            >
              ⮜
            </button>
          </div>
          <div className={styles.TrendingCarousel__contentContainer}>
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
              className={styles.nextButton}
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
