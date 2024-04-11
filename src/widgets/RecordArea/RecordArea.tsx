import { ButtonGroup, TextField, TextFieldProps } from "@mui/material";
import { useSpeechRecognition } from "@shared/libs/speechRecognition";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { notesStore } from "@entities/notes/store";

import styles from "./RecordArea.module.scss";

import { RecordButton, CancelButton, SaveButton } from "@/shared/components";

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

  const reset = () => {
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
        multiline
        fullWidth
        label="Record your memory"
        aria-describedby="memory-text"
        minRows={4}
        value={text}
        onChange={handleOnChange}
      />
      <div className={styles.actions}>
        <ButtonGroup>
          {text.length > 0 && (
            <SaveButton color="success" onClick={handleSave} />
          )}
          {text.length > 0 && <CancelButton onClick={handleCancel} />}
          <RecordButton
            viewMode={isListening ? "recording" : "standBy"}
            onClick={handleRecord}
          />
        </ButtonGroup>
      </div>
    </div>
  );
};
