import styles from "./CreatedDay.module.scss";

const CreatedDay = ({ date }) => {
  const created = new Date(date);
  const year = created.getFullYear();
  const month = String(created.getMonth());
  const day = String(created.getDay());

  return (
    <time dateTime={date} className={styles.time}>
      {year}.{month.padStart(2, "0")}.{day.padStart(2, "0")}
    </time>
  );
};

export default CreatedDay;
