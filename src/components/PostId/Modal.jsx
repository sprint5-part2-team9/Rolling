import CreatedDay from "../Card/CreatedDay";
import CardFrom from "../Card/CardFrom";
import styles from "./Modal.module.scss";
import HtmlParser from "../Card/HtmlParser";
import { useEffect } from "react";
import Portal from "../../Portal/Portal";

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
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <Portal elementId="modal-root">
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
    </Portal>
  );
};

export default Modal;
