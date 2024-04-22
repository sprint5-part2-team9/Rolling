import styles from "./Subheader.module.scss";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();

  const getExtraReactions = useCallback(async (asyncFunction, postId) => {
    try {
      const { results } = await asyncFunction(postId, 8, 3);
      setExtraReactions(() => [...results]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const moreShare = () => {
    setMoreShareView(!moreShareView);
    setEmojiPick(false);
  };

  const showReactions = () => {
    setMoreReactions((prev) => !prev);
  };

  const addEmoji = () => {
    setEmojiPick(!emojiPick);
    setMoreShareView(false);
  };

  const emojiClick = (emojiObject) => {
    setSelectedEmoji(emojiObject);
    setEmojiPick(false);
  };

  const handleCancel = () => {
    navigate("/list");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleCancel();
    }
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
          navigate(0);
        } catch (error) {
          console.error("리액션 추가 에러:", error);
        }
      };
      addReaction();
    }
  }, [selectedEmoji, postId, getExtraReactions, navigate]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.back_to}>
          <img
            src='https://cdn-icons-png.flaticon.com/128/271/271220.png'
            className={styles.backIcon}
            alt='뒤로가기'
            onClick={handleCancel}
            onKeyDown={(event) => handleKeyPress(event)}
            role='button'
            tabIndex={0}
          />
          <h2 className={styles.toPerson}>To.{rolling?.name}</h2>
        </div>
        <div className={styles.menu}>
          {/* 프로필 이미지 및 메시지 수 */}
          <div className={styles.profiles}>
            <div className={styles.profileImgs}>
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
              <span className={styles.people}>{rolling?.messageCount}</span>
              명이 작성했어요!
            </span>
            <div className={styles.bar}>|</div>
          </div>
          {/* 상위 반응 */}
          <div className={styles.mobile_border}>
            <div className={styles.emoji_box}>
              {rolling?.topReactions?.length ? (
                rolling.topReactions.map((item) => (
                  <span key={item.id} className={styles.emoji}>
                    {item.emoji} {item.count}
                  </span>
                ))
              ) : (
                <div>반응이 없어요...</div>
              )}
            </div>
            {/* 추가 반응 버튼 */}
            <div type='button' className={styles.arrowButton} onClick={showReactions}>
              {moreReactions && (
                <div className={styles.extraReactions}>
                  {extraReactions.length
                    ? extraReactions.map((extra) => (
                        <span key={extra.id} className={styles.emoji}>
                          {extra.emoji} {extra.count}
                        </span>
                      ))
                    : "추가적인 반응은 없어요"}
                </div>
              )}
            </div>
            {/* 이모지 추가 버튼 */}
            <div role='button' className={styles.add} onClick={addEmoji}>
              <div className={styles.addIcon}></div>
              <span className={styles.addTitle}>추가</span>
            </div>
            {/* 이모지 피커 */}
            {emojiPick && (
              <div className={styles.emojiPickerContainer}>
                <EmojiPicker className={styles.emojiPick} onEmojiClick={emojiClick} />
              </div>
            )}
            <div className={styles.bar2}>|</div>
            {/* 공유 드롭다운 버튼 */}
            <button className={styles.share} onClick={moreShare}>
              {moreShareView && <ShareDropdown url={location.pathname} />}
            </button>
            <ToastContainer style={{ fontSize: "12px" }} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Subheader;
