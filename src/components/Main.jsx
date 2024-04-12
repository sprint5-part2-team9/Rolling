// Main.jsx

import styles from "./Main.module.scss";

function Main({ children, background }) {
  return <main className={styles.main}>{children}</main>;
}

export default Main;
