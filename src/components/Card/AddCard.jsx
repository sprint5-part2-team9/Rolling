//EmptyCard.jsx
//데이터를 받지 않고 메시지 제작을 위해 이용하는 컴포넌트입니다.

import plus from "../../assets/plus.svg";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const AddCard = () => {
  return (
    <Link className={`${styles.frame} ${styles.add}`} to="./message">
      <div className={styles.circle}>롤링 페이퍼 작성</div>
    </Link>
  );
};

export default AddCard;
