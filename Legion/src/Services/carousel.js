export const next = (currentIndex, favouritedProducts, setCurrentIndex) => {
  setCurrentIndex((currentIndex + 1) % favouritedProducts.length);
};

export const previous = (currentIndex, favouritedProducts, setCurrentIndex) => {
  if (currentIndex === 0) {
    setCurrentIndex((currentIndex + 1) % favouritedProducts.length);
  } else {
    setCurrentIndex((currentIndex - 1) % favouritedProducts.length);
  }
};
