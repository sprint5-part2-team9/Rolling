//Card.jsx
//카드 컴포넌트, 메세지 추가하는 카드는 EmptyCard.jsx입니다.

import { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import CardFrom from "./CardFrom";
import Modal from "../PostId/Modal";
import CreatedDay from "./CreatedDay";

const Card = ({ edit = false, message, deleteClick }) => {
  const [data, setData] = useState({});
  const [isModal, setIsModal] = useState(false);

  const fontStyle = function (font) {
    if (font === "Pretendard") return "pretendard";
    if (font === "나눔명조") return "nanumMyeongjo";
    if (font === "나눔손글씨 손편지체") return "nanumSonPyeonJiCe";
    return "notoSans";
  };

  const handleModal = () => {
    console.log("아이");
  };

  useEffect(() => {
    setData(message);
  }, [message]);

  return (
    <>
      {isModal && <Modal />}
      {edit && (
        <button
          name={data?.id}
          className={styles.deleted}
          type="button"
          onClick={deleteClick}
        >
          삭제
        </button>
      )}
      <button type="button" className={styles.frame} onClick={handleModal}>
        <CardFrom data={data} />
        <p className={`${styles.message} ${styles[fontStyle(data?.font)]}`}>
          {data?.content}
        </p>
        <CreatedDay date={data?.createdAt} />
      </button>
    </>
  );
};

export default Card;
