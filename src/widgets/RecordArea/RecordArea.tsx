import { ButtonGroup, TextField, TextFieldProps } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import styles from "./RecordArea.module.scss";

import { Note } from "@/entities/notes/types";
import { useNotes } from "@/entities/notes/useNotes";
import { notifyError } from "@/entities/notification";
import { RecordButton, CancelButton, SaveButton } from "@/shared/components";
import { useSpeechRecognition } from "@/shared/libs/speechRecognition";

export const RecordArea = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const noteId = searchParams.get("note");
  const { getById, update, add } = useNotes();

  const [currentNote, setCurrentNote] = useState<Note | undefined>();
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

  useEffect(() => {
    if (noteId) {
      getById(noteId).then((note) => {
        setCurrentNote(note);
        setText(note?.text ?? "");
      });
    }
  }, [noteId, getById]);

  const reset = () => {
    setText("");
    setCurrentNote(undefined);
    setSearchParams("");
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

  const handleUpdate = () => {
    if (!currentNote) {
      return;
    }

    update({ ...currentNote, text })
      .then(reset)
      .catch(notifyError);
  };

  const handleSave = () => {
    if (text.length === 0) {
      return;
    }

    add({
      id: uuidv4(),
      createdTime: new Date().toISOString(),
      text,
    })
      .then(reset)
      .catch(notifyError);
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
