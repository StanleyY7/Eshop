// Functions for Carousel

// Handling user clicking next button, goes to next product in carousel.

export const next = (currentIndex, favouritedProducts, setCurrentIndex) => {
  setCurrentIndex((currentIndex + 1) % favouritedProducts.length);
};

// Handling user clicking previous button, goes to previous product in carousel.

export const previous = (currentIndex, favouritedProducts, setCurrentIndex) => {
  if (currentIndex === 0) {
    setCurrentIndex((currentIndex + 1) % favouritedProducts.length);
  } else {
    setCurrentIndex((currentIndex - 1) % favouritedProducts.length);
  }
};
