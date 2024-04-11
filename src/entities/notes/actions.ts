import { notesStore } from "./store";
import { Note } from "./types";

export const addNote = async (note: Note) => {
  await notesStore.notes.add(note);
};

export const removeNote = async (id: Note["id"]) => {
  await notesStore.notes.delete(id);
};
export const updateNote = async ({ id, ...rest }: Note) => {
  await notesStore.notes.update(id, { ...rest });
};
