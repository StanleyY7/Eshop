import styles from "./HamburgerMenu.module.scss";
import React from "react";

import { useState } from "react";
import { updateMenu } from "../../Services/general";

const HamburgerMenu = () => {
  const [burgerclass, setBurgerClass] = useState(
    `${styles.burger__class} ${styles.unclicked}`
  );
  const [menuClass, setMenuClass] = useState(`${styles.menu} ${styles.hidden}`);
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
      <section
        className={styles.hamburgerMenu__container}
        onClick={() =>
          updateMenu(setMenuClass, setBurgerClass, setMenuClicked, menuClicked)
        }
      >
        <div className={burgerclass}></div>
        <div className={burgerclass}></div>
        <div className={burgerclass}></div>
      </section>

      <div className={menuClass}>
        <div className={styles.hamburger__wrapper}>
          <ul className={styles.linksContainer}>
            <li>
              <a href="/Eshop">Home</a>
            </li>
            <br />
            <br />
            <li>
              <a
                href="#social"
                onClick={() => {
                  setBurgerClass(`${styles.burger__class} ${styles.unclicked}`);
                  setMenuClass(`${styles.menu} ${styles.hidden}`);
                }}
              >
                Contact
              </a>
            </li>
            <br />
            <br />
          </ul>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
