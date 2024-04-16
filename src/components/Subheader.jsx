import styles from "./Subheader.module.scss";
import { useCallback, useEffect, useState } from "react";
import ShareDropdown from "./ShareDropdown";
import { ToastContainer } from "react-toastify";
import EmojiPicker from "emoji-picker-react";
import { getReaction, postReaction } from "../Api/Api";

const Subheader = ({ rolling, postId }) => {
  const [moreShareView, setMoreShareView] = useState(false);
  const [emojiPick, setEmojiPick] = useState(false);
  const [moreReactions, setMoreReactions] = useState(false);
  const [extraReactions, setExtraReactions] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const getExtraReactions = useCallback(async (asyncFunction, postId) => {
    try {
      const { results } = await asyncFunction(postId, 8, 3);
      setExtraReactions((prev) => [...results]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const moreShare = () => {
    setMoreShareView(!moreShareView);
  };

  const showReactions = () => {
    setMoreReactions((prev) => !prev);
  };

  const addEmoji = () => {
    setEmojiPick(!emojiPick);
  };

  const emojiClick = (emojiObject) => {
    setSelectedEmoji(emojiObject);
    setEmojiPick(false);
  };

  useEffect(() => {
    getExtraReactions(getReaction, postId);
  }, [getExtraReactions, postId]);

  useEffect(() => {
    if (selectedEmoji) {
      const addReaction = async () => {
        try {
          await postReaction(postId, selectedEmoji.emoji, "increase");
          getExtraReactions(getReaction, postId);
        } catch (error) {
          console.error("리액션 추가 에러:", error);
        }
      };
      addReaction();
    }
  }, [selectedEmoji, postId, getExtraReactions]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <h2 className={styles.toPerson}>To.{rolling?.name}</h2>
        </div>
        <div className={styles.menu}>
          {/* 프로필 이미지 및 메시지 수 */}
          <div className={styles.profiles}>
            {rolling?.recentMessages?.map((item) => (
              <div className={styles.profileCase} key={item.id}>
                <img
                  className={styles.profileImg}
                  src={item.profileImageURL}
                  alt={item.sender}
                  height={28}
                  width={28}
                />
              </div>
            ))}
            {rolling?.messageCount > 3 && (
              <div className={`${styles.profileCase} ${styles.rest}`}>
                +{rolling?.messageCount - 3}
              </div>
            )}
          </div>
          {/* 메시지 수 */}
          <span className={styles.howMany}>
            <strong className={styles.people}>{rolling?.messageCount}</strong>
            명이 작성했어요!
          </span>
          <div className={styles.bar}>|</div>
          {/* 상위 반응 */}
          {rolling?.topReactions?.length ? (
            rolling.topReactions.map((item) => (
              <button key={item.id} type='button' className={styles.emoji}>
                {item.emoji}
                {item.count}
              </button>
            ))
          ) : (
            <div>반응이 없어요...</div>
          )}
          {/* 추가 반응 버튼 */}
          <button type='button' className={styles.arrowButton} onClick={showReactions}>
            {moreReactions && (
              <div className={styles.extraReactions}>
                {extraReactions.length
                  ? extraReactions.map((extra) => (
                      <button key={extra.id} className={styles.emoji}>
                        {extra.emoji}
                        {extra.count}
                      </button>
                    ))
                  : "추가적인 반응은 없어요"}
              </div>
            )}
          </button>
          {/* 이모지 추가 버튼 */}
          <button type='button' className={styles.add} onClick={addEmoji}>
            추가
          </button>
          {/* 이모지 피커 */}
          {emojiPick && (
            <div className={styles.emojiPickerContainer}>
              <EmojiPicker className={styles.emojiPick} onEmojiClick={emojiClick} />
            </div>
          )}
          <div className={styles.bar2}>|</div>
          {/* 공유 드롭다운 버튼 */}
          <button className={styles.share} onClick={moreShare}>
            {moreShareView && <ShareDropdown />}
          </button>
          <ToastContainer style={{ fontSize: "12px" }} />
        </div>
      </nav>
    </header>
  );
};

export default Subheader;
