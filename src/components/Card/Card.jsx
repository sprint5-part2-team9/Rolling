import { useEffect, useState } from 'react';
import styles from './Card.module.scss';
import example from './example.json';

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
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(example);
  }, []);

  return (
    <div className={styles.frame}>
      <div>1</div>
      <p>2</p>
      <CreatedDay date={data?.createdAt} />
    </div>
  );
};

export default Card;
