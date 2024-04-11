import { RecordButton, CancelButton, SaveButton } from "@/shared/components";

import styles from "./RecordArea.module.scss";
import { ButtonGroup, TextField, TextFieldProps } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { notesStore } from "@entities/notes/store";
import { useSpeechRecognition } from "@shared/libs/speechRecognition";

export const RecordArea = () => {
  const [text, setText] = useState("");

  const {
    start: startListen,
    stop: stopListen,
    reset: resetTranscript,
    isListening,
    transcript,
  } = useSpeechRecognition({ continuous: true, language: "en" });

  useEffect(() => {
    if (transcript) {
      setText(transcript);
    }
  }, [transcript]);

  const reset = async () => {
    setText("");
    if (isListening) {
      stopListen();
      resetTranscript();
    }
  };

  const handleOnChange: TextFieldProps["onChange"] = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleRecord = () => {
    if (isListening) {
      stopListen();
    } else {
      startListen();
    }
  };

  const handleSave = async () => {
    if (text.length === 0) {
      return;
    }
    try {
      await notesStore.notes.add({
        id: uuidv4(),
        createdTime: new Date().toISOString(),
        text,
      });
    } catch (err) {
      // show notification or something
      console.error(err);
    } finally {
      reset();
    }
  };

  const handleCancel = () => {};

  return (
    <div className={styles.root}>
      <TextField
        label="Record your memory"
        aria-describedby="memory-text"
        multiline
        fullWidth
        minRows={4}
        value={text}
        onChange={handleOnChange}
      />
      <div className={styles.actions}>
        <ButtonGroup>
          <SaveButton onClick={handleSave} />
          <CancelButton onClick={handleCancel} />
          <RecordButton onClick={handleRecord} />
        </ButtonGroup>
      </div>
    </div>
  );
};
