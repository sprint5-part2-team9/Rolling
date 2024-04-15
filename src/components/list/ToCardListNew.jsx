import styles from "./ToCardList.module.scss";
import ToCard from "./ToCard";
import { useState, useContext } from "react";
import { RollingPaperContext } from "./ListMain";
import arrowLeft from "../../assets/arrow_left.svg";
import arrowRight from "../../assets/arrow_right.svg";

const ToCardList = () => {
  const data = useContext(RollingPaperContext);
  const [startIndex, setStartIndex] = useState(0);

  const ToCards =
    data &&
    data.map((CardData) => (
      <ToCard
        key={CardData.id}
        id={CardData.id}
        date={CardData.createdAt}
        count={CardData.messageCount}
        bgColor={CardData.backgroundColor}
        bgImg={CardData.backgroundImageURL}
        name={CardData.name}
        messages={CardData.recentMessages}
        reactions={CardData.topReactions}
      />
    ));

  // messageCount 최신순
  const newToCards = [...ToCards].sort((a, b) => {
    return new Date(b.props.date) - new Date(a.props.date);
  });

  // 버튼
  const slicedNewToCards = newToCards.slice(startIndex, startIndex + 4);
  const handleNext = () => {
    if (startIndex + 4 < newToCards.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className={styles.listwrap}>
      {startIndex !== 0 && (
        <button className={`${styles.listBtn} ${styles.listBtnL}`} onClick={handlePrev}>
          <img src={arrowLeft} alt="arrowLeft" />
        </button>
      )}
      <li className={styles.cardList}>{slicedNewToCards}</li>
      {startIndex + 4 < newToCards.length && (
        <button className={`${styles.listBtn} ${styles.listBtnR}`} onClick={handleNext}>
          <img src={arrowRight} alt="arrowright" />
        </button>
      )}
    </section>
  );
};

export default ToCardList;
