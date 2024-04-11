import { BrowserRouter } from "react-router-dom";

import { Navigation } from "./Navigation";

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Navigation />
    </BrowserRouter>
  );
};

export default App;
