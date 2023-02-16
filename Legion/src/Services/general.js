import { useEffect } from "react";

// General Functions

// Function to check to see if social section is in view, if it is plays fade in animation

export const observeSocialFadeIn = (socialRef, setIsInView) => {
  useEffect(() => {
    const socialSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    });
    socialSectionObserver.observe(socialRef.current);
  }, []);
};

// Function to auto start page at top on initial page load.

export const startPageAtTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

// Slideshow for Cover

export const slideShow = (setCurrentImage, currentImage, coverImages) => {
  useEffect(() => {
    const intervalImageIndex = setInterval(() => {
      setCurrentImage((currentImage + 1) % coverImages.length);
    }, 7000);
    return () => clearInterval(intervalImageIndex);
  }, [currentImage, coverImages.length]);
};

export const handleSizeChange = (setSelectedSize) => {
  setSelectedSize(event.target.value);
};

// Carousel

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


// Hamburger

// For Hamburger Menu display, updates display/classes depending on if clicked or not
import styles from "../components/HamburgerMenu/HamburgerMenu.module.scss";

export const updateMenu = (
  setMenuClass,
  setBurgerClass,
  setMenuClicked,
  menuClicked
) => {
  setMenuClicked(!menuClicked);
  setBurgerClass(
    menuClicked ? `${styles.burger__class} ${styles.unclicked}`: `${styles.burger__class} ${styles.clicked}`
  );
  setMenuClass(menuClicked ? `${styles.menu}  ${styles.hidden}` : `${styles.menu}  ${styles.visible}`);
};
