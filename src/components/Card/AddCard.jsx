//EmptyCard.jsx
//데이터를 받지 않고 메시지 제작을 위해 이용하는 컴포넌트입니다.

import plus from "../../assets/plus.svg";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const AddCard = () => {
  return (
    <Link to="./message">
      <div className={`${styles.frame} ${styles.add}`}>
        <div className={styles.circle}>
          <img src={plus} alt="새로 만들기" height={24} width={24} />
        </div>
      </div>
    </Link>
  );
};

export default AddCard;
