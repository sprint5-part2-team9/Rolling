import styles from "./PostIdMain.module.scss";

function PostIdMain({ children, bgColor = "", bgImg = null }) {
  return (
    <main
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`${styles.main} ${styles[bgColor]}`}
    >
      {children}
    </main>
  );
}

export default PostIdMain;
