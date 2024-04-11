import { BrowserRouter } from "react-router-dom";

import "@/config/theme/variables.module.scss";
import { Navigation } from "./Navigation";

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Navigation />
    </BrowserRouter>
  );
};

export default App;
