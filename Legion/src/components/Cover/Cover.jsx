import "./Cover.css";
import legionCoverOne from "../../assets/legionCover.png";
import legionCoverTwo from "../../assets/legionCoverTwo.png";
import legionCoverThree from "../../assets/legionCoverThree.png";
import { useState, useEffect } from "react";

const Cover = () => {
  const coverImages = [legionCoverOne, legionCoverTwo, legionCoverThree];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalImageIndex = setInterval(() => {
      setCurrentImage((currentImage + 1) % coverImages.length);
    }, 7000);
    return () => clearInterval(intervalImageIndex);
  }, [currentImage, coverImages.length]);
  return (
    <section>
      <div
        className="override"
        style={{
          width: `100%`,
          height: `60vh`,

          backgroundImage: `url(${coverImages[currentImage]})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
          marginTop: `2rem`,
          transition: `5s ease`,
          backgroundAttachment: `fixed`,
        }}
      ></div>
    </section>
  );
};

export default Cover;
