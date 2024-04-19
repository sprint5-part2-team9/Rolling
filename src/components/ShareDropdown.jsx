import styles from "./ShareDropdown.module.scss";
import CopyClipboard from "./CopyClipboard";

const ShareDropdown = ({ url }) => {
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

  return (
    <div className={styles.dropdown}>
      <li role='button' className={styles.kakao} onClick={() => shareKakaoLink(url)}>
        카카오톡 공유
      </li>
      <CopyClipboard className={styles.url} />
    </div>
  );
};

export default ShareDropdown;
