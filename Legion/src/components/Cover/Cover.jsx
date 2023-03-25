import styles from "./Cover.module.scss";
import React from "react";
import legionCoverOne from "../../assets/legionCover.png";
import legionCoverTwo from "../../assets/legionCoverTwo.png";
import legionCoverThree from "../../assets/legionCoverThree.png";

import { useState } from "react";

import { slideShow } from "../../Services/general";

const Cover = () => {
  const coverImages = [legionCoverOne, legionCoverTwo, legionCoverThree];
  const [currentImage, setCurrentImage] = useState(0);

  slideShow(setCurrentImage, currentImage, coverImages);

  return (
    <section>
      <div
        className={styles.override}
        role="slideshow"
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
