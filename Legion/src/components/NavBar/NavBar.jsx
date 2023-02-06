import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const history = useNavigate();

  const handleClick = () => {
    history.push("#social");
  };
  return (
    <nav className="navbar">
      <NavLink className="navbar__link" to="/Eshop">
        About
      </NavLink>
      <NavLink className="navbar__link" to="/Eshop/Kit">
        Kit
      </NavLink>
      <NavLink className="navbar__link" to="#social" onClick={handleClick}>
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
