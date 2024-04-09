import { RecordButton, CancelButton, SaveButton } from "@/shared/components";

import styles from "./RecordArea.module.scss";
import { ButtonGroup, TextField } from "@mui/material";

export const RecordArea = () => {
  return (
    <div className={styles.root}>
      <TextField
        label="Record your memory"
        aria-describedby="memory-text"
        multiline
        fullWidth
        minRows={4}
      />
      <div className={styles.actions}>
        <ButtonGroup>
          <SaveButton />
          <CancelButton />
          <RecordButton />
        </ButtonGroup>
      </div>
    </div>
  );
};
