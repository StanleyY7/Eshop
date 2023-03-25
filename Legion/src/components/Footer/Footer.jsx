import styles from "./Footer.module.scss";
import React from "react";

import smallLogo from "../../assets/legionSmallLogo.png";

const Footer = () => {
  return (
    <section className={styles.footer__container}>
      <footer>
        <img role="logo" src={smallLogo} />
      </footer>
    </section>
  );
};

export default Footer;
