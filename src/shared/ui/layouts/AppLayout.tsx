import { Container } from "@mui/system";

import styles from "./AppLayout.module.scss";
import { AppLayoutProps } from "./types";

export const AppLayout: React.FC<AppLayoutProps> = ({ header, children }) => {
  return (
    <>
      {header}
      <Container classes={{ root: styles.root }}>{children}</Container>
    </>
  );
};
