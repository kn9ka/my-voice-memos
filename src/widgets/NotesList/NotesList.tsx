import { notesStore } from "@/entities/notes/store";
import { useLiveQuery } from "dexie-react-hooks";

export const NotesList = () => {
  const notes = useLiveQuery(() => notesStore.notes.toArray());

  return <div>{JSON.stringify(notes)}</div>;
};
