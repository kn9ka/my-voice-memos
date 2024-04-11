import MicIcon from "@mui/icons-material/Mic";
import { IconButton } from "@mui/material";

import { ButtonProps } from "../types";

export const RecordButton: React.FC<ButtonProps> = ({
  className,
  color,
  fontSize = "large",
  onClick,
}) => {
  return (
    <IconButton color={color} className={className} onClick={onClick}>
      <MicIcon fontSize={fontSize} />
    </IconButton>
  );
};
