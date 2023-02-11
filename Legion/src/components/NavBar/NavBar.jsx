import "./NavBar.css";
import About from "../ABout/About";
import Cart from "./Cart/Cart";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

import { NavLink } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router";
const NavBar = () => {
  const [open, setOpened] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <a className="navbar__link" onClick={() => setOpened(true)}>
          About
        </a>
        <NavLink className="navbar__link" to="/Eshop/Kit">
          Kit
        </NavLink>
        <NavLink
          className="navbar__link"
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
