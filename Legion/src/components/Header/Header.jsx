import styles from "./Header.module.scss";

import NavBar from "../../containers/NavBar/NavBar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className={styles.header__container}>
        <header>
          <NavLink className={styles.header__title} to="/Eshop">
            Legion
          </NavLink>

          <NavBar />
        </header>
      </section>
    </>
  );
};

export default Header;
