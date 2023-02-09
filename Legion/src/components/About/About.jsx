import "./About.css";
import { closeModal } from "../../Services/nav";

const About = ({ setOpened, open }) => {
  return (
    <>
      {open && (
        <div className="overlay">
          <section className="About__container">
            <p className="close-button" onClick={closeModal(setOpened)}>
              X
            </p>

            <div className="About__content-container">
              <h1 className="About__title">About</h1>
              <p>
                An e-commerce website built by Stanley, this website has it's
                own backend built on Firestore.
              </p>
            </div>
            <div className="filler"></div>
          </section>
        </div>
      )}
    </>
  );
};

export default About;
