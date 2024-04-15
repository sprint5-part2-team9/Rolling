//Cards.jsx
/*PostId 페이지에 나오는 카드들을 렌더링하는 컴포넌트입니다.*/
import styles from "./Cards.module.scss";
import Card from "../Card/Card";
import AddCard from "../Card/AddCard";
import { Link, useNavigate } from "react-router-dom";
import { deleteRecipient } from "../../Api/Api";
import { useState } from "react";

const Cards = ({ items, deleteClick, edit, postId }) => {
  const [tryDel, setTryDel] = useState("");
  const navigate = useNavigate();

  const deleteRolling = async function () {
    setTryDel("trying");
    let response = false;
    try {
      response = await deleteRecipient(postId);
    } catch (err) {
      console.log(err);
    } finally {
      setTryDel("");
    }

    if (response) {
      navigate("/list");
    }
  };

  return (
    <div className={`${styles.box} ${styles[tryDel]}`}>
      {edit && (
        <button
          className={`${styles.btn} ${styles["-del"]}`}
          type="button"
          onClick={deleteRolling}
        >
          삭제하기
        </button>
      )}
      {edit ? (
        <Link className={`${styles.btn} ${styles["-edit"]} `} to="../">
          수정끝내기
        </Link>
      ) : (
        <Link className={`${styles.btn} ${styles["-edit"]}`} to="./edit">
          수정하기
        </Link>
      )}
      <ul className={styles.frame}>
        {edit || (
          <li className={styles.li} key={-1}>
            <AddCard />
          </li>
        )}
        {items?.map((item) => {
          return (
            <li key={item.id} className={styles.li}>
              <Card message={item} deleteClick={deleteClick} edit={edit} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cards;
