import styles from "./ToCardList.module.scss";
import ToCard from "./ToCard";
import { useState, useContext } from "react";
import { RollingPaperContext } from "./ListMain";

function ToCardList() {
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

  // messageCount 베스트순
  const bestToCards = [...ToCards].sort((a, b) => {
    return b.props.count - a.props.count;
  });

  // 버튼
  const slicedBestToCards = bestToCards.slice(startIndex, startIndex + 4);
  console.log(bestToCards);
  console.log(slicedBestToCards);
  console.log(data);

  const handleNext = () => {
    if (startIndex + 4 < bestToCards.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className={styles.listwrap} >
      {startIndex !== 0 && (
        <button className={styles.listBtn} onClick={handlePrev}>
          이전
        </button>
      )}
      <li className={styles.cardList}>{slicedBestToCards}</li>
      {startIndex + 4 < bestToCards.length && (
        <button className={styles.listBtn} onClick={handleNext}>
          다음
        </button>
      )}
    </section>
  );
}

export default ToCardList;
