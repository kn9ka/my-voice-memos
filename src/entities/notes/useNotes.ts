import { useLiveQuery } from "dexie-react-hooks";

import { addNote, removeNote, updateNote } from "./actions";
import { getAll, getById } from "./selectors";

export const useNotes = () => {
  const notes = useLiveQuery(getAll);

  return {
    notes,
    add: addNote,
    remove: removeNote,
    update: updateNote,
    getById,
  };
};
