// Header.jsx
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.frame}>
        <Link to="/">
          <h1 className={`${styles.title}`}>Rolling</h1>
        </Link>
        <Link to="/post">
          <button type="button">롤링 페이퍼 만들기</button>
        </Link>
      </div>
    </header>
  );
}
//위 버튼은 컴포넌트 스타일을 적용할 것임

export default Header;
