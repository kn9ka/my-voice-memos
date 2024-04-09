import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { ButtonProps } from "../types";

export const CancelButton: React.FC<ButtonProps> = ({ className, onClick }) => {
  return (
    <IconButton onClick={onClick} className={className}>
      <ClearIcon fontSize="large" />
    </IconButton>
  );
};
