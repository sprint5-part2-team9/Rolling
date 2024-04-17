// Header.jsx
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header({ isbutton = true, postIdPage = "" }) {
  return (
    <header className={`${styles.header} ${styles[postIdPage]}`}>
      <nav className={styles.frame}>
        <Link to="/">
          <h1 className={`${styles.title}`}>Rolling</h1>
        </Link>
        {isbutton && (
          <Link className={styles.create_btn} to="/post">
            롤링 페이퍼 만들기
          </Link>
        )}
      </nav>
    </header>
  );
}
//위 버튼은 컴포넌트 스타일을 적용할 것임

export default Header;
