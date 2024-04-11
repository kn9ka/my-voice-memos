import { NotesList } from "@widgets/NotesList";
import { RecordArea } from "@widgets/RecordArea";

export const MainRoute = () => {
  return (
    <div>
      <RecordArea />
      <NotesList />
    </div>
  );
};
