// Input.jsx
import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

function Input({ placeholder, value, onChange }) {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (!inputValue.trim()) {
      setError(true); // 값이 비어 있으면 에러
    } else {
      setError(false);
    }
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue); // 값 변경 시 onChange 콜백
    }
  };

  const inputClass = classNames(styles.input, {
    [styles.error]: error, // 에러 상태에 error 클래스 추가
  });

  return (
    <>
      <input
        className={inputClass}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p className={styles.error_msg}>값을 입력해 주세요.</p>}
    </>
  );
}

export default Input;
