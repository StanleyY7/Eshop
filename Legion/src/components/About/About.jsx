import styles from "./About.module.scss";

const About = ({ setOpened, open }) => {
  return (
    <>
      {open && (
        <div className={styles.overlay}>
          <section className={styles.About__container}>
            <p
              className={styles.About__close - button}
              onClick={() => setOpened(false)}
            >
              X
            </p>

            <div className={styles.About__content - container}>
              <h1 className={styles.About__title}>About</h1>
              <p>
                An e-commerce website built by Stanley, this website has it's
                own backend built on Firestore.
              </p>
            </div>
            <div className={styles.filler}></div>
          </section>
        </div>
      )}
    </>
  );
};

export default About;
