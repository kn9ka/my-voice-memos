import { ButtonGroup, Divider, Stack } from "@mui/material";
import { Note } from "@shared/components/Note";
import { useLiveQuery } from "dexie-react-hooks";
import { useSearchParams } from "react-router-dom";

import { sortDatesASC } from "./helpers";

import { notesStore } from "@/entities/notes/store";
import { DeleteButton, EditButton } from "@/shared/components";

export const NotesList = () => {
  const [, setSearchParams] = useSearchParams();
  const notes = useLiveQuery(() => notesStore.notes.toArray());
  const sortedNotes = [...(notes || [])].sort((a, b) =>
    sortDatesASC(a.createdTime, b.createdTime)
  );

  const handleEdit = (id: string) => {
    setSearchParams(`note=${id}`);
  };

  const handleDelete = (id: string) => {
    notesStore.notes.delete(id);
  };

  return (
    <Stack spacing={1} divider={<Divider flexItem />}>
      {sortedNotes.map((note) => (
        <Note
          key={note.id}
          text={note.text}
          actions={
            <ButtonGroup>
              <EditButton
                fontSize="medium"
                onClick={() => handleEdit(note.id)}
              />
              <DeleteButton
                fontSize="medium"
                color="error"
                onClick={() => handleDelete(note.id)}
              />
            </ButtonGroup>
          }
        />
      ))}
    </Stack>
  );
};
