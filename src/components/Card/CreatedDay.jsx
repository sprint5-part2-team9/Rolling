import styles from "./CreatedDay.module.scss";

const CreatedDay = ({ date, modal }) => {
  const created = new Date(date);
  const year = created.getFullYear();
  const month = String(created.getMonth() + 1);
  const day = String(created.getDate());

  return (
    <time dateTime={date} className={`${styles.time} ${styles[modal]}`}>
      {year}.{month.padStart(2, "0")}.{day.padStart(2, "0")}
    </time>
  );
};

export default CreatedDay;
