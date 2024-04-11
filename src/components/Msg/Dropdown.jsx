// Dropdown.jsx
import { useState } from "react";
import styles from "./Dropdown.module.scss";
import topIcon from "../../assets/dropdown_top.png";
import downIcon from "../../assets/dropdown_down.png";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown_wrapper}>
      <div className={styles.dropdown} onClick={toggleDropdown}>
        <span>{value}</span>
        <img
          src={isOpen ? topIcon : downIcon}
          className={styles.dropdown_icon}
          width={15}
          height={15}
          alt="dropdown icon"
        />
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.option}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
