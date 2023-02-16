import styles from "./NavBar.module.scss";

import About from "../../components/About/About";
import Cart from "../../components/Cart/Cart";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";

import { NavLink } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router";
const NavBar = () => {
  const [open, setOpened] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.navbar__link} onClick={() => setOpened(true)}>
          About
        </a>
        <NavLink className={styles.navbar__link} to="/Eshop/kit">
          Kit
        </NavLink>
        <NavLink
          className={styles.navbar__link}
          to="#social"
          onClick={() => navigate.push("#social")}
        >
          Contact
        </NavLink>
        <HamburgerMenu />
      </nav>
      <About open={open} setOpened={setOpened} />
      <Cart />
    </>
  );
};

export default NavBar;
