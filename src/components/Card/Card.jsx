import { useEffect, useState } from 'react';
import styles from './Card.module.scss';
import example from './example.json';
import CardFrom from './CardFrom';

const CreatedDay = ({ date }) => {
  const created = new Date(date);
  const year = created?.getFullYear();
  const month = String(created?.getMonth());
  const day = String(created?.getDay());

  return (
    <time dateTime={date} className={styles.time}>
      {year}.{month.padStart(2, '0')}.{day.padStart(2, '0')}
    </time>
  );
};

const Card = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(example);
  }, []);

  return (
    <div className={styles.frame}>
      <CardFrom data={data} />
      <p className={styles.message}>{data?.content}</p>
      <CreatedDay date={data?.createdAt} />
    </div>
  );
};

export default Card;
