import SaveIcon from "@mui/icons-material/Save";
import { IconButton } from "@mui/material";

import { ButtonProps } from "../types";

export const SaveButton: React.FC<ButtonProps> = ({
  className,
  color = "primary",
  fontSize = "large",
  onClick,
}) => {
  return (
    <IconButton color={color} className={className} onClick={onClick}>
      <SaveIcon fontSize={fontSize} />
    </IconButton>
  );
};
