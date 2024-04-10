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

/*
  to-do list
  1. messageCount 3명 초과시만 숫자 프로필 이미지 노출(-3명 제외)
  2. 카드 배경화면 사진,색에 따른 폰트색 변경 
  3. 이모지 추가

*/
const ToCard = ({ id, count, bgColor, bgImg, name, messages, reactions }) => {
  const [background, setBackground] = useState(colorsCardPurple);

  const fromUserImg =
    messages &&
    messages.map((Img) => (
      <img
        className={styles.profileImg}
        key={Img.id}
        src={Img.profileImageURL}
        alt="profileimg"
      />
    ));

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

  useEffect(() => {
    const color = backgroundItem();
    setBackground(color);
  }, []);

  return (
    <section
      className={styles.listcard}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Link to={`/post/${id}`}>
        <h2>TO.{name}</h2>
        <div className={styles.profileImgs}>
          {fromUserImg}
          <div className={styles.persons}>+{count - 3}</div>
        </div>
        <div>{count}명이 작성했어요!</div>
        <hr />
      </Link>
    </section>
  );
};

export default ToCard;
