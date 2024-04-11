import { Container } from "@mui/system";

import styles from "./AppLayout.module.scss";
import { AppLayoutProps } from "./types";

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <Container classes={{ root: styles.root }}>{children}</Container>;
};
