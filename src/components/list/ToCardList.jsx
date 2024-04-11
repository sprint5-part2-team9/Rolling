import styles from "./ToCardList.module.scss";
import ToCard from "./ToCard";
import { useContext } from "react";
import { RollingPaperContext } from "./ListMain";

function ToCardList() {
  const data = useContext(RollingPaperContext);

  /*
      to-do list
      1. 리스트별로 정렬(베스트, 최신수)
      2. 양옆 버튼
    
    */

  const ToCards =
    data &&
    data.map((Carddata) => (
      <ToCard
        key={Carddata.id}
        id={Carddata.id}
        count={Carddata.messageCount}
        bgColor={Carddata.backgroundColor}
        bgImg={Carddata.backgroundImageURL}
        name={Carddata.name}
        messages={Carddata.recentMessages}
        reactions={Carddata.topReactions}
      />
    ));

  return (
    <li className={styles.cardList}>
      <button></button>
      {ToCards}
      <button></button>
    </li>
  );
}

export default ToCardList;
