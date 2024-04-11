import { ButtonGroup, TextField, TextFieldProps } from "@mui/material";
import { useSpeechRecognition } from "@shared/libs/speechRecognition";
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { notesStore } from "@entities/notes/store";

import styles from "./RecordArea.module.scss";

import { RecordButton, CancelButton, SaveButton } from "@/shared/components";

export const RecordArea = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const noteId = searchParams.get("note");

  const [text, setText] = useState("");

  const currentNote = useLiveQuery(() => {
    if (noteId) {
      return notesStore.notes.where("id").equals(noteId).first();
    }
  }, [noteId]);

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

  useEffect(() => {
    if (currentNote) {
      setText(currentNote.text);
    }
  }, [currentNote]);

  const reset = () => {
    setText("");
    if (isListening) {
      stopListen();
      resetTranscript();
    }
    setSearchParams("");
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

  const handleUpdate = async () => {
    try {
      await notesStore.notes.update(currentNote?.id, { text });
    } catch (err) {
      // show notification or something
      console.error(err);
    } finally {
      reset();
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

  const handleCancel = () => {
    reset();
  };

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
            <SaveButton
              color="success"
              onClick={currentNote ? handleUpdate : handleSave}
            />
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
