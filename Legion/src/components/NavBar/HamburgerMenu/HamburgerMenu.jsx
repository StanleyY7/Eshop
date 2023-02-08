import { useState } from "react";

import "./HamburgerMenu.css";

const HamburgerMenu = ({ openModal }) => {
  const [burgerclass, setBurgerClass] = useState("burger__class unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [menuClicked, setMenuClicked] = useState(false);

  const updateMenu = () => {
    setMenuClicked(!menuClicked);
    setBurgerClass(
      menuClicked ? "burger__class unclicked" : "burger__class clicked"
    );
    setMenuClass(menuClicked ? "menu hidden" : "menu visible");
  };

  return (
    <>
      <section className="hamburgerMenu__container" onClick={updateMenu}>
        <div className={burgerclass}></div>
        <div className={burgerclass}></div>
        <div className={burgerclass}></div>
      </section>

      <div className={menuClass}>
        <ul className="links-container">
          <li>
            <a href="/Eshop">Home</a>
          </li>
          <br />
          <br />
          <li>
            <a
              href="#social"
              onClick={() => {
                setBurgerClass("burger__class unclicked");
                setMenuClass("menu hidden");
              }}
            >
              Contact
            </a>
          </li>
          <br />
          <br />
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
