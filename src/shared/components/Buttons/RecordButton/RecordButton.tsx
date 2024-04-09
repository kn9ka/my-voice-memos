import { IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import { ButtonProps } from "../types";

export const RecordButton: React.FC<ButtonProps> = ({ className, onClick }) => {
  return (
    <IconButton onClick={onClick} color="success" className={className}>
      <MicIcon fontSize="large" />
    </IconButton>
  );
};
