import { IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { ButtonProps } from "../types";

export const SaveButton: React.FC<ButtonProps> = ({ className, onClick }) => {
  return (
    <IconButton onClick={onClick} className={className}>
      <SaveIcon fontSize="large" />
    </IconButton>
  );
};
