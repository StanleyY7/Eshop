import { useEffect } from "react";

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

export const startPageAtTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

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
