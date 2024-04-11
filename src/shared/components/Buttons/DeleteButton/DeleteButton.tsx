import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

import { ButtonProps } from "../types";

export const DeleteButton: React.FC<ButtonProps> = ({
  className,
  color = "success",
  fontSize = "large",
  onClick,
}) => {
  return (
    <IconButton color={color} className={className} onClick={onClick}>
      <DeleteIcon fontSize={fontSize} />
    </IconButton>
  );
};
