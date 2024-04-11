import { notesStore } from "./store";
import { Note } from "./types";

export const getAll = () => notesStore.notes.toArray();
export const getById = (id: Note["id"]) =>
  notesStore.notes.where("id").equals(id).first();
