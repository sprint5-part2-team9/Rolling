import styles from './ShareDropdown.module.scss';
import CopyClipboard from './CopyClipboard';

function ShareDropdown() {
  return (
    <div className={styles.dropdown}>
      <li className={styles.kakao}>카카오톡 공유</li>
      <CopyClipboard className={styles.url} />
    </div>
  );
}

export default ShareDropdown;
