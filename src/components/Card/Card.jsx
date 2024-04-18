//Card.jsx
//카드 컴포넌트, 메세지 추가하는 카드는 EmptyCard.jsx입니다.

import { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import CardFrom from "./CardFrom";
import CreatedDay from "./CreatedDay";
import HtmlParser from "./HtmlParser";

const Card = ({
  edit = false,
  message,
  deleteClick,
  setModalData,
  setIsModal,
}) => {
  const [data, setData] = useState({});

  const fontStyle = function (font) {
    if (font === "Pretendard") return "pretendard";
    if (font === "나눔명조") return "nanumMyeongjo";
    if (font === "나눔손글씨 손편지체") return "nanumSonPyeonJiCe";
    return "notoSans";
  };

  const handleModal = () => {
    setModalData(() => data);
    setIsModal(true);
  };

  useEffect(() => {
    setData(message);
  }, [message]);

  return (
    <>
      {edit && (
        <button
          name={message?.id}
          className={styles.deleted}
          type="button"
          onClick={deleteClick}
        >
          삭제
        </button>
      )}
      <button type="button" className={styles.frame} onClick={handleModal}>
        <CardFrom data={data} />
        <div className={`${styles.message} ${styles[fontStyle(data?.font)]}`}>
          <HtmlParser content={data?.content} />
        </div>
        <CreatedDay date={data?.createdAt} />
      </button>
    </>
  );
};

export default Card;
