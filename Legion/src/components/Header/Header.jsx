import "./Header.css";
import Cover from "../Cover/Cover";
import App from "../../App";
import NavBar from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header__container">
        <header>
          <NavLink className="header__title" to="/Eshop">
            Legion
          </NavLink>

          <NavBar />
        </header>
      </section>
    </>
  );
};

export default Header;
