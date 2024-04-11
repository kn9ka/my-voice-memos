import { Box, Typography } from "@mui/material";

import styles from "./Note.module.scss";
import { NoteProps } from "./types";

export const Note = ({ text, actions }: NoteProps) => {
  return (
    <Box className={styles.root}>
      <div>
        <Typography>{text}</Typography>
      </div>

      <div className={styles.actions}>{actions}</div>
    </Box>
  );
};
