import CreatedDay from "../Card/CreatedDay";
import CardFrom from "../Card/CardFrom";
import styles from "./Modal.module.scss";
import HtmlParser from "../Card/HtmlParser";
import { useEffect, useRef } from "react";

const MODAL = "-modal";

const Modal = ({ data, setIsModal }) => {
  const fontStyle = function (font) {
    if (font === "Pretendard") return "pretendard";
    if (font === "나눔명조") return "nanumMyeongjo";
    if (font === "나눔손글씨 손편지체") return "nanumSonPyeonJiCe";
    return "notoSans";
  };

  const handleClick = () => {
    setIsModal(false);
  };

  const handleBubble = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.body.style = `overflow: hidden; margin-right: 17px`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <div className={styles.background} onClick={handleClick}>
      <article className={styles.frame} onClick={handleBubble}>
        <div className={styles.modalTop}>
          <CardFrom data={data} modal={MODAL} />
          <CreatedDay date={data?.createdAt} modal={MODAL} />
        </div>
        <div className={`${styles.content} ${styles[fontStyle(data?.font)]}`}>
          <HtmlParser content={data?.content} />
        </div>
        <button type="button" className={styles.button} onClick={handleClick}>
          확인
        </button>
      </article>
    </div>
  );
};

export default Modal;
