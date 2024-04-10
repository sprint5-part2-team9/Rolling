import styles from './CardFrom.module.scss';

const Relation = ({ relationship }) => {
  const relation = function (relate) {
    if (relate === '지인') return 'acquaintance';
    if (relate === '동료') return 'coWorker';
    if (relate === '가족') return 'family';
    if (relate === '친구') return 'friend';
  };

  const R = relation(relationship);

  return <span className={styles[R]}>{relationship}</span>;
};

const CardFrom = ({ data }) => {
  const { profileImageURL, sender, relationship } = data;

  return (
    <div className={styles.frame}>
      <div className={styles.imgCase}>
        <img
          src={profileImageURL}
          alt=""
          width={56}
          height={56}
          className={styles.img}
        />
      </div>
      <div className={styles.from}>
        <span className={styles.name}>{sender}</span>
        <div>
          <Relation relationship={relationship} />
        </div>
      </div>
    </div>
  );
};

export default CardFrom;
