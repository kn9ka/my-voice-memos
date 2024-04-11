import { Container } from "@mui/system";

import { AppLayoutProps } from "./types";

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
