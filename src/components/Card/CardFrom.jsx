//cardFrom.jsx
//카드 컴포넌트에서 상단의 누구인지, 어떤 관계인지를 표시하는 부분에 관한 컴포넌트입니다.

import styles from "./CardFrom.module.scss";

const Relation = ({ relationship = "지인" }) => {
  const relation = function (relate) {
    if (relate === "동료") return "-coWorker";
    if (relate === "가족") return "-family";
    if (relate === "친구") return "-friend";
    return "-acquaintance";
  };

  return (
    <span className={`${styles.badge} ${styles[relation(relationship)]}`}>
      {relationship}
    </span>
  );
};

const CardFrom = ({ data, modal }) => {
  const { profileImageURL, sender, relationship } = data;

  return (
    <div className={`${styles.frame} ${styles[modal]}`}>
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
