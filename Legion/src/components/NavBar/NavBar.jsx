import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import About from "../ABout/About";
import Cart from "./Cart/Cart";
const NavBar = () => {
  const [open, setOpened] = useState(false);
  const history = useNavigate();

  const openModal = () => {
    setOpened(true);
  };

  const handleClick = () => {
    history.push("#social");
  };
  return (
    <>
      <nav className="navbar">
        <a className="navbar__link" onClick={openModal}>
          About
        </a>
        <NavLink className="navbar__link" to="/Eshop/Kit">
          Kit
        </NavLink>
        <NavLink className="navbar__link" to="#social" onClick={handleClick}>
          Contact
        </NavLink>
        <About open={open} setOpened={setOpened} />
      </nav>
      <About />
      <Cart />
    </>
  );
};

export default NavBar;
