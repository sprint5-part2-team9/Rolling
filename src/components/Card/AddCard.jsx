//EmptyCard.jsx
//데이터를 받지 않고 메시지 제작을 위해 이용하는 컴포넌트입니다.

import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const AddCard = () => {
  return (
    <Link className={`${styles.frame} ${styles.add}`} to="./message">
      <span className={styles.circle}></span>
      <span className={styles.hide}>롤링 페이퍼 작성</span>
    </Link>
  );
};

export default AddCard;
