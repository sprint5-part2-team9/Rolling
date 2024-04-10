import { useEffect, useState } from 'react';
import styles from './Card.module.scss';
import example from './example.json';
import CardFrom from './CardFrom';
import deleted from '../../assets/deleted.png';

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

const Card = ({ edited = true }) => {
  const [data, setData] = useState({});

  const handleDelete = () => {
    console.log('삭제되길 바래');
  };

  useEffect(() => {
    setData(example);
  }, []);

  return (
    <div className={styles.frame}>
      {edited && (
        <button className={styles.deleted} type="button" onClick={handleDelete}>
          <img src={deleted} alt="삭제" width={24} height={24} />
        </button>
      )}
      <CardFrom data={data} />
      <p className={styles.message} style={{ fontFamily: data?.font }}>
        {data?.content}
      </p>
      <CreatedDay date={data?.createdAt} />
    </div>
  );
};

export default Card;
