// Header.jsx
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header({ isbutton = true }) {
  return (
    <header className={`${styles.header} ${isbutton ? `` : styles.noButton}`}>
      <nav className={styles.frame}>
        <h1 className={`${styles.title}`}>
          <Link to="/">Rolling</Link>
        </h1>
        {isbutton && <Link to="/post">롤링 페이퍼 만들기</Link>}
      </nav>
    </header>
  );
}
//위 버튼은 컴포넌트 스타일을 적용할 것임

export default Header;
