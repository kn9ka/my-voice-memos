import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

import { ButtonProps } from "../types";

export const CancelButton: React.FC<ButtonProps> = ({ className, onClick }) => {
  return (
    <IconButton className={className} onClick={onClick}>
      <ClearIcon fontSize="large" />
    </IconButton>
  );
};
