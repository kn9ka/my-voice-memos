import { Route, Routes } from "react-router-dom";

import { MainRoute } from "@/pages/MainRoute";
import { Page } from "@/pages/pages";

const routes = {
  [Page.Main]: {
    Component: MainRoute,
    path: "/voice-memos",
  },
};

export const Navigation = () => {
  return (
    <Routes>
      {Object.values(routes).map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
