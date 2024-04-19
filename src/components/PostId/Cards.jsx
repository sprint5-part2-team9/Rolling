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
  headerFocus,
}) => {
  const [tryDel, setTryDel] = useState("");
  const navigate = useNavigate();
  const focusing = useRef(null);

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

  const toheaderKeyDown = (e) => {
    if (e.code === "Tab") {
      e.preventDefault();
      headerFocus.current?.focus();
    }
  };

  const toEditPageKeyDown = (e) => {
    if (e.code === "Tab") {
      e.preventDefault();
      focusing.current?.focus();
    }
  };

  useEffect(() => {
    if (edit) focusing.current?.focus();
  }, [edit]);

  return (
    <div className={`${styles.box} ${styles[tryDel]}`}>
      {edit && (
        <h2 className={styles.focus} tabIndex={0} ref={focusing}>
          수정 페이지
        </h2>
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
      {edit && (
        <button
          className={`${styles.btn} ${styles["-del"]}`}
          type="button"
          onClick={deleteRolling}
        >
          포스트 삭제
        </button>
      )}
      {edit ? (
        <Link
          key={"edit-end"}
          className={`${styles.btn} ${styles["-edit"]} ${styles["-trying"]} `}
          to="../"
          onKeyDown={toEditPageKeyDown}
        >
          삭제 끝내기
        </Link>
      ) : (
        <Link
          key={"edit-start"}
          className={`${styles.btn} ${styles["-edit"]}`}
          onKeyDown={toheaderKeyDown}
          to="./edit"
        >
          삭제하기
        </Link>
      )}
    </div>
  );
};

export default Cards;
