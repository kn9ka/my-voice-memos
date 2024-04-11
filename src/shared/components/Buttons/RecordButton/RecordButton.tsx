import MicIcon from "@mui/icons-material/Mic";
import { IconButton } from "@mui/material";

import { ButtonProps } from "../types";

export const RecordButton: React.FC<ButtonProps> = ({ className, onClick }) => {
  return (
    <IconButton color="success" className={className} onClick={onClick}>
      <MicIcon fontSize="large" />
    </IconButton>
  );
};
