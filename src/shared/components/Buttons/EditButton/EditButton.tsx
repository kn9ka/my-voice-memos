import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

import { ButtonProps } from "../types";

export const EditButton: React.FC<ButtonProps> = ({
  className,
  color,
  fontSize = "large",
  onClick,
}) => {
  return (
    <IconButton color={color} className={className} onClick={onClick}>
      <EditIcon fontSize={fontSize} />
    </IconButton>
  );
};
