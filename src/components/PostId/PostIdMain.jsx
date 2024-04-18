import styles from "./PostIdMain.module.scss";

function PostIdMain({ children, bgColor = "", bgImg = null }) {
  return (
    <main
      style={
        bgImg && {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url(${bgImg})`,
        }
      }
      className={`${styles.main} ${styles[bgColor]}`}
    >
      {children}
    </main>
  );
}

export default PostIdMain;
