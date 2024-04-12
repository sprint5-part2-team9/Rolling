//Cards.jsx
/*PostId 페이지에 나오는 카드들을 렌더링하는 컴포넌트입니다.*/
import styles from "./Cards.module.scss";
import Card from "../Card/Card";
import AddCard from "../Card/AddCard";

const Cards = ({ items, onClick }) => {
  return (
    <ul className={styles.frame}>
      <li className={styles.li} key={-1}>
        <AddCard />
      </li>
      {items?.map((item) => {
        return (
          <li key={item.id} className={styles.li}>
            <Card message={item} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default Cards;
