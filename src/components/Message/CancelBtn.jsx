// CancelBtn.jsx
/*
취소하기 버튼(폼에서 뒤로가기)
*/
import styles from "./CancelBtn.module.scss";

function CancelBtn({ onClick }) {
  return (
    <button type='button' className={styles.cancelBtn} onClick={onClick}>
      취소하기
    </button>
  );
}

export default CancelBtn;
