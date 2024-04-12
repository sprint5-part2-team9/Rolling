import styles from "./Subheader.module.scss";
import profile from "../assets/profile.svg";
import { useState } from "react";
import ShareDropdown from "./ShareDropdown";
import { ToastContainer } from "react-toastify";
import EmojiPicker from "emoji-picker-react";

const Subheader = () => {
  const [moreShareView, setMoreShareView] = useState(false);
  const [emojiPick, setEmojiPick] = useState(false);

  const moreShare = () => {
    setMoreShareView(!moreShareView);
  };

  const addEmoji = () => {
    setEmojiPick(!emojiPick);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <h1>To.Ashley Kim</h1>
        </div>
        <div className={styles.menu}>
          <img className={styles.profile} src={profile} alt="profile" />
          <h1>23명이 작성했어요!</h1>
          <div className={styles.bar}>|</div>
          <button className={styles.emoji}>👍24</button>
          <button className={styles.emoji}>😍16</button>
          <button className={styles.emoji}>🎉10</button>
          <button className={styles.arrowButton} />
          <button
            className={styles.add}
            emojiPick={emojiPick}
            onClick={addEmoji}
          >
            추가
          </button>
          {emojiPick && (
            <div className={styles.emojiPickerContainer}>
              <EmojiPicker className={styles.emojiPick} />
            </div>
          )}

          <div className={styles.bar2}>|</div>
          <button
            className={styles.share}
            moreShareView={moreShareView}
            onClick={moreShare}
          >
            {moreShareView && <ShareDropdown />}
          </button>
          <ToastContainer style={{ fontSize: "12px" }} />
        </div>
      </nav>
    </header>
  );
};

export default Subheader;
