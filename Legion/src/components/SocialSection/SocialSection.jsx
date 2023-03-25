import styles from "./SocialSection.module.scss";
import React from "react";
import instagramLogo from "../../assets/instagram.png";
import socialPhotoTwo from "../../assets/socialTwo.png";
import socialPhotoOne from "../../assets/socialOne.png";
import socialPhotoThree from "../../assets/socialThree.png";
import socialPhotoFour from "../../assets/socialFour.png";

import { useState, useRef } from "react";

import { observeSocialFadeIn } from "../../Services/general";

const SocialSection = () => {
  const [isInView, setIsInView] = useState(false);

  const socialRef = useRef();
  observeSocialFadeIn(socialRef, setIsInView);

  return (
    <section
      className={styles.SocialSection__container}
      id="social"
      ref={socialRef}
    >
      <div className={styles.alignmentWrapper}>
        <div className={styles.SocialSection__grid}>
          <div
            className={`${styles.SocialSection__photoContainer} ${
              isInView ? `${styles.fadeLeft}` : ""
            }`}
          >
            <img src={socialPhotoTwo} />
            <img src={socialPhotoThree} />
          </div>

          <div className={styles.SocialSection__content}>
            <h2 className={styles.SocialSection__title}>Join the Legion.</h2>
            <p>And become a legionnaire by following our socials:</p>
            <a href="https://www.instagram.com/" target="_blank">
              <img className={styles.instagram} src={instagramLogo} />
            </a>
          </div>

          <div
            className={`${styles.SocialSection__photoContainer} ${
              isInView ? `${styles.fadeRight}` : ""
            }`}
          >
            <img src={socialPhotoOne} />
            <img src={socialPhotoFour} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
