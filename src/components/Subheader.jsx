import styles from "./Subheader.module.scss";
import profile from "../assets/profile.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import ShareDropdown from "./ShareDropdown";
import { ToastContainer } from "react-toastify";
import EmojiPicker from "emoji-picker-react";
import { getReaction, postReaction } from "../Api/Api";

const Subheader = ({ rolling, postId }) => {
  const [moreShareView, setMoreShareView] = useState(false);
  const [emojiPick, setEmojiPick] = useState(false);
  const [moreReactions, setMoreReactions] = useState(false);
  const [extraReactions, setExtraReactions] = useState([]);

  const getExtraReactions = useCallback(async (asyncFunction, postId) => {
    try {
      const { results } = await asyncFunction(postId, 8, 3);
      setExtraReactions((prev) => [...results]);
    } catch (err) {
      console.log(err);
    } finally {
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

  useEffect(() => {
    getExtraReactions(getReaction, postId);
  }, [getExtraReactions, postId]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <h2 className={styles.toPerson}>To.{rolling?.name}</h2>
        </div>
        <div className={styles.menu}>
          <div className={styles.profiles}>
            {rolling?.recentMessages?.map((item) => {
              return (
                <div className={styles.profileCase} key={item.id}>
                  <img
                    className={styles.profileImg}
                    src={item.profileImageURL}
                    alt={item.sender}
                    height={28}
                    width={28}
                  />
                </div>
              );
            })}
            <div className={`${styles.profileCase} ${styles.rest}`}>
              +{rolling?.messageCount - 3}
            </div>
          </div>
          <span className={styles.howMany}>
            <strong className={styles.people}>{rolling?.messageCount}</strong>
            명이 작성했어요!
          </span>
          <div className={styles.bar}>|</div>
          {rolling?.topReactions?.length ? (
            rolling.topReactions.map((item) => {
              return (
                <button key={item.id} type="button" className={styles.emoji}>
                  {item.emoji}
                  {item.count}
                </button>
              );
            })
          ) : (
            <div>반응이 없어요...</div>
          )}
          {/*이모지 값에 따라 아이콘을 뱉는 함수가 필요할 듯 합니다 */}
          <button
            type="button"
            className={styles.arrowButton}
            onClick={showReactions}
          >
            {moreReactions && (
              <div className={styles.extraReactions}>
                {extraReactions.length
                  ? extraReactions.map((extra) => {
                      console.log(extra);
                      return (
                        <button key={extra.id}>
                          {extra.emoji}
                          {extra.count}
                        </button>
                      );
                    })
                  : "추가적인 반응은 없어요"}
              </div>
            )}
          </button>
          <button type="button" className={styles.add} onClick={addEmoji}>
            추가
          </button>
          {emojiPick && (
            <div className={styles.emojiPickerContainer}>
              <EmojiPicker className={styles.emojiPick} />
            </div>
          )}

          <div className={styles.bar2}>|</div>
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
