import "./HamburgerMenu.css";
import { useState } from "react";
import { updateMenu } from "../../../Services/nav";

const HamburgerMenu = () => {
  const [burgerclass, setBurgerClass] = useState("burger__class unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
      <section
        className="hamburgerMenu__container"
        onClick={() =>
          updateMenu(setMenuClass, setBurgerClass, setMenuClicked, menuClicked)
        }
      >
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
