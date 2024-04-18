//Cards.jsx
/*PostId 페이지에 나오는 카드들을 렌더링하는 컴포넌트입니다.*/
import styles from "./Cards.module.scss";
import Card from "../Card/Card";
import AddCard from "../Card/AddCard";
import { Link, useNavigate } from "react-router-dom";
import { deleteRecipient } from "../../Api/Api";
import { useEffect, useState, useRef } from "react";

const Cards = ({
  items,
  deleteClick,
  edit,
  postId,
  setModalData,
  setIsModal,
  name,
}) => {
  const [tryDel, setTryDel] = useState("");
  const navigate = useNavigate();
  const focusing = useRef();

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

  const handleKeyDown = (e) => {
    if (e.code === "Tab") {
      e.preventDefault();
      focusing.current?.focus();
    }
  };

  useEffect(() => focusing.current?.focus(), [edit]);

  return (
    <div className={`${styles.box} ${styles[tryDel]}`}>
      <button className={styles.focus} type="button" ref={focusing}>
        {edit ? "수정페이지" : name}
      </button>
      <ul className={styles.frame}>
        {edit || (
          <li className={styles.li} key={-1}>
            <AddCard />
          </li>
        )}
        {items?.map((item) => {
          return (
            <li key={item.id} className={styles.li}>
              <Card
                message={item}
                deleteClick={deleteClick}
                edit={edit}
                setModalData={setModalData}
                setIsModal={setIsModal}
              />
            </li>
          );
        })}
      </ul>
      {edit ? (
        <Link
          key={"edit-end"}
          className={`${styles.btn} ${styles["-edit"]} ${styles["-trying"]} `}
          to="../"
        >
          수정끝내기
        </Link>
      ) : (
        <Link
          key={"edit-start"}
          className={`${styles.btn} ${styles["-edit"]}`}
          to="./edit"
        >
          수정하기
        </Link>
      )}
      {edit && (
        <button
          className={`${styles.btn} ${styles["-del"]}`}
          type="button"
          onClick={deleteRolling}
          onKeyDown={handleKeyDown}
        >
          삭제하기
        </button>
      )}
    </div>
  );
};

export default Cards;
