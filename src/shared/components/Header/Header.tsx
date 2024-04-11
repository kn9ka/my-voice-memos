import GitHubIcon from "@mui/icons-material/GitHub";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.icons}>
        <a
          href="https://github.com/kn9ka/my-voice-memos"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon fontSize="large" color="inherit" />
        </a>
      </div>
    </div>
  );
};
