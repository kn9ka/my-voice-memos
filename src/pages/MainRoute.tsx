import { NotesList } from "@widgets/NotesList";
import { RecordArea } from "@widgets/RecordArea";

import { AppLayout } from "@/shared/ui";

export const MainRoute = () => {
  return (
    <AppLayout>
      <RecordArea />
      <NotesList />
    </AppLayout>
  );
};
