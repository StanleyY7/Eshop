import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="navbar__link" to="/">
        About
      </NavLink>
      <NavLink className="navbar__link" to="/">
        Kit
      </NavLink>
      <NavLink className="navbar__link" to="/">
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
