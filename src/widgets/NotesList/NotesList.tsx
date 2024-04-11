import { useLiveQuery } from "dexie-react-hooks";

import { notesStore } from "@/entities/notes/store";

export const NotesList = () => {
  const notes = useLiveQuery(() => notesStore.notes.toArray());

  return <div>{JSON.stringify(notes)}</div>;
};
