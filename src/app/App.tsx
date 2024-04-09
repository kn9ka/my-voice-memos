import { MainRoute } from "@/pages/MainRoute";
import { AppLayout } from "@/shared/ui/layouts/";
import "@config/theme/variables.module.scss";

export const App = () => {
  return (
    <AppLayout>
      <MainRoute />
    </AppLayout>
  );
};

export default App;
