import CreatedDay from "../Card/CreatedDay";
import CardFrom from "../Card/CardFrom";
import styles from "./Modal.module.scss";

const MODAL = "-modal";

const Modal = ({ data, setIsModal }) => {
  const handleClick = () => {
    setIsModal(false);
  };

  return (
    <div className={styles.background}>
      <article className={styles.frame}>
        <div className={styles.modalTop}>
          <CardFrom data={data} modal={MODAL} />
          <CreatedDay date={data?.createdAt} modal={MODAL} />
        </div>
        <p className={styles.content}>{data?.content}</p>
        <button type="button" className={styles.button} onClick={handleClick}>
          확인
        </button>
      </article>
    </div>
  );
};

export default Modal;
