import Dexie, { Table } from "dexie";
import { Note } from "./types";

export class NotesStore extends Dexie {
  notes!: Table<Note>;

  constructor() {
    super("my_voice_memos");

    this.version(1).stores({
      notes: "++id, createdTime, text", // Primary key and indexed props
    });
  }
}

export const notesStore = new NotesStore();
