import { ButtonGroup, Divider, Stack } from "@mui/material";
import { Note } from "@shared/components/Note";
import { useLiveQuery } from "dexie-react-hooks";

import { sortDatesASC } from "./helpers";

import { notesStore } from "@/entities/notes/store";
import { DeleteButton, EditButton } from "@/shared/components";

export const NotesList = () => {
  const notes = useLiveQuery(() => notesStore.notes.toArray());
  const sortedNotes = [...(notes || [])].sort((a, b) =>
    sortDatesASC(a.createdTime, b.createdTime)
  );

  return (
    <Stack spacing={1} divider={<Divider flexItem />}>
      {sortedNotes.map((note) => (
        <Note
          key={note.id}
          text={note.text}
          actions={
            <ButtonGroup>
              <EditButton fontSize="medium" onClick={() => {}} />
              <DeleteButton
                fontSize="medium"
                color="error"
                onClick={() => {}}
              />
            </ButtonGroup>
          }
        />
      ))}
    </Stack>
  );
};
