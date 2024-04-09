import plus from '../../assets/plus.png';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

const EmptyCard = () => {
  return (
    <div className={`${styles.frame} ${styles.empty}`}>
      <Link to="./message">
        <button className={styles.circle}>
          <img src={plus} alt="새로 만들기" height={24} width={24} />
        </button>
      </Link>
    </div>
  );
};

export default EmptyCard;
