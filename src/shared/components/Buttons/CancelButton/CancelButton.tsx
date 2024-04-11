import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

import { ButtonProps } from "../types";

export const CancelButton: React.FC<ButtonProps> = ({
  className,
  color,
  fontSize = "large",
  onClick,
}) => {
  return (
    <IconButton className={className} color={color} onClick={onClick}>
      <ClearIcon fontSize={fontSize} />
    </IconButton>
  );
};
