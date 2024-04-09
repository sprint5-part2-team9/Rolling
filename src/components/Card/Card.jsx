import styles from './Card.module.scss';

const Card = ({ children }) => {
  return <div className={styles.frame}>{children}</div>;
};

export default Card;
