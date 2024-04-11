import SaveIcon from "@mui/icons-material/Save";
import { IconButton } from "@mui/material";

import { ButtonProps } from "../types";

export const SaveButton: React.FC<ButtonProps> = ({ className, onClick }) => {
  return (
    <IconButton className={className} onClick={onClick}>
      <SaveIcon fontSize="large" />
    </IconButton>
  );
};
