import CreatedDay from "../Card/CreatedDay";
import CardFrom from "../Card/CardFrom";
import styles from "./Modal.module.scss";

const Modal = ({ data }) => {
  return (
    <div className={styles.background}>
      <article className={styles.frame}>
        <CardFrom data={data} modal="-modal" />
        <CreatedDay date={data?.createdAt} />
      </article>
    </div>
  );
};

export default Modal;
