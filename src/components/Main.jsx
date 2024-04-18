// Main.jsx
import styles from "./Main.module.scss";
import landing01 from "../assets/landing_01.png";
import landing02 from "../assets/landing_02.png";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className={styles.main}>
      <section className={styles.section1}>
        <div className={styles.first}>
          <div className={styles.point}>Point.01</div>
          <div>
            <p className={styles.firstTitle}>
              누구나 손쉽게, 온라인{" "}
              <span className={styles.firstTitle}>
                롤링 페이퍼를 만들 수 있어요
              </span>
            </p>
          </div>
          <div className={styles.description}>
            로그인 없이 자유롭게 만들어요.
          </div>
        </div>
        <div>
          <img src={landing01} alt="메인페이지" className={styles.img1} />
        </div>
      </section>
      <section className={styles.section2}>
        <div>
          <img src={landing02} alt="메인페이지" className={styles.img2} />
        </div>
        <div className={styles.second}>
          <div className={styles.point}>Point.02</div>
          <div>
            <p className={styles.secondTitle}>
              서로에게 이모지로 감정을{" "}
              <span className={styles.secondTitle}>표현해보세요</span>
            </p>
          </div>
          <div className={styles.description}>
            롤링 페이퍼에 이모지를 추가할 수 있어요.
          </div>
        </div>
      </section>
      <footer>
        <Link
          to="/list"
          className={`${styles.linkToList} ${styles.linkButton}`}
        >
          구경해보기
        </Link>
      </footer>
    </div>
  );
}

export default Main;
