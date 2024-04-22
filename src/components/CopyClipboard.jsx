import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./CopyClipboard.module.scss";
import DivToButton from "./DivToButton";

function CopyClipboard() {
  const copyClipboard = () => {
    const url = window.location.href;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("URL이 클립보드에 복사되었습니다.", {
          position: "bottom-center",
        });
      })
      .catch((err) => {
        toast.error("URL 복사 실패: " + err.message, {
          position: "bottom-center",
        });
      });
  };

  return (
    <li className={styles.copyButton} onClick={copyClipboard}>
      <DivToButton>URL 공유</DivToButton>
    </li>
  );
}

export default CopyClipboard;
