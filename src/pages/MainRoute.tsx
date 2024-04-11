import { AppLayout } from "@/shared/ui";
import { NotesList } from "@/widgets/NotesList";
import { RecordArea } from "@/widgets/RecordArea";

export const MainRoute = () => {
  return (
    <AppLayout>
      <RecordArea />
      <NotesList />
    </AppLayout>
  );
};
