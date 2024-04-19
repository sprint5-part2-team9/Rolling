// Dropdown.jsx
import { useState } from "react";
import styles from "./Dropdown.module.scss";
import topIcon from "../../assets/dropdown_top.png";
import downIcon from "../../assets/dropdown_down.png";

function Dropdown({ id, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleDropdown();
    }
  };

  return (
    <div id={id} className={styles.dropdown_wrapper}>
      <div
        className={styles.dropdown}
        role='button'
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyDown={(event) => handleKeyPress(event)}
      >
        <span>{value}</span>
        <img
          src={isOpen ? topIcon : downIcon}
          className={styles.dropdown_icon}
          width={15}
          height={15}
          alt=''
        />
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.option}
              tabIndex={0}
              onClick={() => handleOptionClick(option.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  handleOptionClick(option.value);
                }
              }}
            >
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
