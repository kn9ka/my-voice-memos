export type Note = {
  id: string;
  createdTime: string;
  text: string;
};

export type NotesStore = {
  ids: string[];
  entities: Record<string, Note>;

  save: (note: Note) => void;
};
