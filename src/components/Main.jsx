// Main.jsx
import styles from './Main.module.scss';
import landing01 from '../assets/landing_01.png';
import landing02 from '../assets/landing_02.png';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div className={styles.main}>
      <section className={styles.section1}>
        <div>
          <div className={styles.point}>Point.01</div>
          <div>
            <p className={styles.title}>누구나 손쉽게, 온라인</p>
            <p className={styles.title}>롤링 페이퍼를 만들 수 있어요</p>
          </div>
          <div className={styles.description}>
            로그인 없이 자유롭게 만들어요.
          </div>
        </div>
        <div>
          <img src={landing01} alt='메인페이지' className={styles.img} />
        </div>
      </section>
      <section className={styles.section2}>
        <div>
          <img src={landing02} alt='메인페이지' className={styles.img} />
        </div>
        <div>
          <div className={styles.point}>Point.02</div>
          <div>
            <p className={styles.title}>서로에게 이모지로 감정을</p>
            <p className={styles.title}>표현해보세요</p>
          </div>
          <div className={styles.description}>
            롤링 페이퍼에 이모지를 추가할 수 있어요.
          </div>
        </div>
      </section>
      <footer>
        <button className={styles.linkButton}>
          <Link to='/list' className={styles.linkToList}>
            구경해보기
          </Link>
        </button>
      </footer>
    </div>
  );
  // return <main className={styles.main}>{children}</main>;
};

export default Main;
