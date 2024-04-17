import styles from "./ToCardList.module.scss";
import ToCard from "./ToCard";
import { useState, useContext, useEffect } from "react";
import { RollingPaperContext } from "./ListMain";
import arrowLeft from "../../assets/arrow_left.svg";
import arrowRight from "../../assets/arrow_right.svg";

const ToCardList = () => {
  const data = useContext(RollingPaperContext);
  const [startIndex, setStartIndex] = useState(0);
  const [slicedBestToCards, setSlicedBestToCards] = useState([]);

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

  // 화면 크기에 따른 버튼, 스크롤 변경
  useEffect(() => {
    const slicedToCards = () => {
      if (window.matchMedia("(max-width: 1199px)").matches) {
        setSlicedBestToCards(ToCards);
      } else {
        setSlicedBestToCards(ToCards.slice(startIndex, startIndex + 4));
      }
    };

    slicedToCards();
  }, [startIndex, ToCards]);

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
    <section className={styles.listwrap}>
      {startIndex !== 0 && (
        <button
          className={`${styles.listBtn} ${styles.listBtnL}`}
          onClick={handlePrev}
        >
          <img src={arrowLeft} alt="arrowLeft" />
        </button>
      )}
      <li className={styles.cardList}>{slicedBestToCards}</li>
      {startIndex + 4 < bestToCards.length && (
        <button
          className={`${styles.listBtn} ${styles.listBtnR}`}
          onClick={handleNext}
        >
          <img src={arrowRight} alt="arrowright" />
        </button>
      )}
    </section>
  );
};

export default ToCardList;
