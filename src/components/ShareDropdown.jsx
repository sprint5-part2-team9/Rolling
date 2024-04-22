import styles from "./ShareDropdown.module.scss";
import CopyClipboard from "./CopyClipboard";
import DivToButton from "./DivToButton";

const ShareDropdown = ({ url, origin }) => {
  const initKakaoSDK = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("192f6ca4e27f947eea0d110faa86eb84");
    }
  };

  const shareKakaoLink = (url) => {
    initKakaoSDK();

    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "Rolling",
        description: "웹 롤링페이퍼 Rolling",
        imageUrl: "https://avatars.githubusercontent.com/u/166100407?s=200&v=4",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "롤링페이퍼 쓰러 가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  const handleCancel = (e) => {
    if (e.code === "Enter") {
      origin.current?.focus();
    }
  };

  return (
    <ul className={styles.dropdown}>
      <li className={styles.kakao} onClick={() => shareKakaoLink(url)}>
        <DivToButton>카카오톡 공유</DivToButton>
      </li>
      <CopyClipboard className={styles.url} />
      <li>
        <div
          role="button"
          tabIndex={0}
          className={styles.hide}
          onKeyDown={handleCancel}
        >
          취소
        </div>
      </li>
    </ul>
  );
};

export default ShareDropdown;
