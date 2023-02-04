import "./SocialSection.css";
import instagramLogo from "../../assets/instagram.png";
import socialPhotoTwo from "../../assets/socialTwo.png";
import socialPhotoOne from "../../assets/socialOne.png";
import socialPhotoThree from "../../assets/socialThree.png";
import socialPhotoFour from "../../assets/socialFour.png";
import { useEffect, useState, useRef } from "react";

const SocialSection = () => {
  const [isInView, setIsInView] = useState(false);

  const socialRef = useRef();

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

  return (
    <section className="SocialSection__container" id="social" ref={socialRef}>
      <div className="alignment-wrapper">
        <div className="SocialSection__grid">
          <div
            className={`SocialSection__photo-container ${
              isInView ? "fade-in-left" : ""
            }`}
          >
            <img src={socialPhotoTwo} />
            <img src={socialPhotoThree} />
          </div>

          <div className="SocialSection__content">
            <h2 className="SocialSection__title">Join the Legion.</h2>
            <p>And become a legionnaire by following our socials:</p>
            <a href="https://www.instagram.com/" target="_blank">
              <img className="instagram" src={instagramLogo} />
            </a>
          </div>

          <div
            className={`SocialSection__photo-container ${
              isInView ? "fade-in-right" : ""
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
