// CreateBtn.jsx
/*
생성하기 버튼(비어있는 값이 있으면 비활성화)
*/
import classNames from "classnames";
import styles from "./CreateBtn.module.scss";

function CreateBtn({ disabled, onClick }) {
  const btnClasses = classNames(styles.createBtn, { [styles.disabled]: disabled });

  return (
    <button type='button' className={btnClasses} disabled={disabled} onClick={onClick}>
      생성하기
    </button>
  );
}

export default CreateBtn;
