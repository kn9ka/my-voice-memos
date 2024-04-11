import { ButtonGroup, Divider, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import { sortDatesASC } from "./helpers";

import { useNotes } from "@/entities/notes/useNotes";
import { DeleteButton, EditButton } from "@/shared/components/Buttons";
import { Note } from "@/shared/components/Note";

/**
 *  @TODO: split notes by dates
 * like: 2020-01-01
 *       note1
 *       note2
 */
export const NotesList = () => {
  const [, setSearchParams] = useSearchParams();
  const { notes, remove } = useNotes();
  const sortedNotes = [...(notes || [])].sort((a, b) =>
    sortDatesASC(a.createdTime, b.createdTime)
  );

  const handleEdit = (id: string) => {
    setSearchParams(`note=${id}`);
  };

  const handleDelete = (id: string) => {
    remove(id);
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
