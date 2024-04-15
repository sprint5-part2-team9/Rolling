// Main.jsx

import styles from "./Main.module.scss";

function Main({ children, bgColor = "beige", bgImg = null }) {
  return (
    <main
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`${styles.main} ${styles[bgColor]}`}
    >
      {children}
    </main>
  );
}

export default Main;
