import { Typography, Box } from "@mui/material";

import styles from "./Note.module.scss";
import { NoteProps } from "./types";

export const Note = ({ text, actions }: NoteProps) => {
  return (
    <Box className={styles.root}>
      <Typography className={styles.text}>{text}</Typography>

      <div className={styles.actions}>{actions}</div>
    </Box>
  );
};
