import styles from "./ToCardList.module.scss";
import ToCard from "./ToCard";
import { useState, useContext, useEffect } from "react";
import { RollingPaperContext } from "./ListMain";
import arrowLeft from "../../assets/arrow_left.svg";
import arrowRight from "../../assets/arrow_right.svg";

const ToCardList = () => {
  const data = useContext(RollingPaperContext);
  const [isMobileView, setIsMobileView] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [slicedNewToCards, setSlicedNewToCards] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1199);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (!isMobileView && startIndex + 4 < data.length) {
      setStartIndex(startIndex + 4);
    }
  };

  const handlePrev = () => {
    if (!isMobileView && startIndex >= 4) {
      setStartIndex(startIndex - 4);
    } else if (!isMobileView && startIndex < 4) {
      setStartIndex(0);
    }
  };

  // 최신순으로 정렬
  const sortedData = Array.isArray(data)
    ? data.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  return (
    <section className={styles.listwrap}>
      {/* 모바일 사이즈 화면일땐 전체 카드 출력 */}
      {isMobileView ? (
        <ul className={styles.cardList}>
          {sortedData.map((CardData) => (
            <li key={CardData.id}>
              <ToCard
                id={CardData.id}
                date={CardData.createdAt}
                count={CardData.messageCount}
                bgColor={CardData.backgroundColor}
                bgImg={CardData.backgroundImageURL}
                name={CardData.name}
                messages={CardData.recentMessages}
                reactions={CardData.topReactions}
              />
            </li>
          ))}
        </ul>
      ) : (
        <>
          {/* 모바일보다 큰 화면일 땐 카드를 4개씩 나눠서 출력, 좌우 버튼 누르면 이동 */}
          {startIndex !== 0 && (
            <button className={`${styles.listBtn} ${styles.listBtnL}`} onClick={handlePrev}>
              <img src={arrowLeft} alt='arrowLeft' />
            </button>
          )}
          <ul className={styles.cardList}>
            {sortedData.slice(startIndex, startIndex + 4).map((CardData) => (
              <li key={CardData.id}>
                <ToCard
                  id={CardData.id}
                  date={CardData.createdAt}
                  count={CardData.messageCount}
                  bgColor={CardData.backgroundColor}
                  bgImg={CardData.backgroundImageURL}
                  name={CardData.name}
                  messages={CardData.recentMessages}
                  reactions={CardData.topReactions}
                />
              </li>
            ))}
          </ul>
          {startIndex + 4 < sortedData.length && (
            <button className={`${styles.listBtn} ${styles.listBtnR}`} onClick={handleNext}>
              <img src={arrowRight} alt='arrowright' />
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default ToCardList;
