import "./NavBar.css";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { useState } from "react";
import About from "../ABout/About";
import Cart from "./Cart/Cart";
import { openModal, handleClick } from "../../Services/nav";
import { useNavigate } from "react-router";
const NavBar = () => {
  const [open, setOpened] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <a className="navbar__link" onClick={() => openModal(setOpened)}>
          About
        </a>
        <NavLink className="navbar__link" to="/Eshop/Kit">
          Kit
        </NavLink>
        <NavLink
          className="navbar__link"
          to="#social"
          onClick={() => handleClick(navigate)}
        >
          Contact
        </NavLink>
        <About open={open} setOpened={setOpened} />
        <HamburgerMenu openModal={openModal} />
      </nav>
      <About />
      <Cart />
    </>
  );
};

export default NavBar;
