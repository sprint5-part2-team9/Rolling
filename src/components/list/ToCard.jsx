import styles from "./ToCard.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { RollingPaperContext } from "./ListMain";
import colorsCardPurple from "../../assets/Type_colors=card_list_01.png";
import colorsCardBeige from "../../assets/Type_colors=card_list_02.png";
import colorsCardBlue from "../../assets/Type_colors=card_list_03.png";
import colorsCardGreen from "../../assets/Type_colors=card_list_05.png";

/*
  {
    "id": 2,
    "name": "강영훈",
    "backgroundColor": "green",
    "backgroundImageURL": null,
    "createdAt": "2023-10-26T13:19:31.401765Z",
    "messageCount": 3}
*/
const ToCard = ({ id, count, bgColor, bgImg, name, messages, reactions }) => {
  const [background, setBackground] = useState(colorsCardPurple);

  useEffect(() => {
    const color = backgroundItem();
    setBackground(color);
  }, []);

  // 배경 색
  const backgroundItem = () => {
    let usingColor = "";
    if (bgImg !== null) {
      usingColor = bgImg;
    } else {
      switch (bgColor) {
        case "purple":
          usingColor = colorsCardPurple;
          break;
        case "beige":
          usingColor = colorsCardBeige;
          break;
        case "blue":
          usingColor = colorsCardBlue;
          break;
        case "green":
          usingColor = colorsCardGreen;
          break;
        default:
          usingColor = colorsCardPurple;
      }
    }
    return usingColor;
  };

  // from 프로필
  const fromUserImg =
    reactions &&
    messages.map((Img) => (
      <img
        className={styles.profileImg}
        key={Img.id}
        src={Img.profileImageURL}
        alt="profileimg"
      />
    ));

  // 이모지
  const topReactions =
    reactions &&
    reactions.map((item) => (
      <div
        className={styles.emoji}
        key={item.id}
        emoji={item.emoji}
        count={item.count}
        alt="reactions"
      >
        {item.emoji} {item.count}
      </div>
    ));

  //
  return (
    <Link to={`/post/${id}`} style={{ color: "inherit" }}>
      <section
        className={styles.tocard}
        style={{
          backgroundImage:
            bgImg !== null
              ? `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${background})`
              : `url(${background})`,
        }}
      >
        <h1 style={{ color: bgImg !== null ? "#fff" : "#181818" }}>
          TO.{name}
        </h1>
        <div className={styles.profileImgs}>
          {fromUserImg}
          {count - 3 > 0 && <div className={styles.persons}>+{count - 3}</div>}
        </div>
        <h2
          className="countText"
          style={{ color: bgImg !== null ? "#fff" : "#3A3A3A" }}
        >
          {count} <span>명이 작성했어요!</span>
        </h2>
        <div className={styles.line} />
        <div className={styles.emojiItems}>{topReactions}</div>
      </section>
    </Link>
  );
};

export default ToCard;
