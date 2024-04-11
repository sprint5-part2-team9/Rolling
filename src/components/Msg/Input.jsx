// Input.jsx
import classNames from "classnames"; // classnames 라이브러리
import styles from "./Input.module.scss";

function Input({ placeholder, error, disabled }) {
  const inputClass = classNames(styles.input, {
    [styles.error]: error,
    [styles.disabled]: disabled,
  });

  return (
    <>
      <input className={inputClass} placeholder={placeholder} disabled={disabled} />
    </>
  );
}

export default Input;
