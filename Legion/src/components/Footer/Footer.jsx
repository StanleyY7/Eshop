import "./Footer.css";
import smallLogo from "../../assets/legionSmallLogo.png";

const Footer = () => {
  return (
    <section className="footer__container">
      <footer>
        <img src={smallLogo} />
      </footer>
    </section>
  );
};

export default Footer;
