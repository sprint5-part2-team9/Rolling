// Input.jsx
import classNames from "classnames"; // classnames 라이브러리
import styles from "./Input.module.scss";

function Input({ error, disabled }) {
  const inputClass = classNames(styles.input, {
    [styles.error]: error,
    [styles.disabled]: disabled,
  });

  return (
    <>
      <input className={inputClass} placeholder="이름을 입력해 주세요." disabled={disabled} />
    </>
  );
}

export default Input;
