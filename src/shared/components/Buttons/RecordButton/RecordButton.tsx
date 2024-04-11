import MicIcon from "@mui/icons-material/Mic";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { IconButton } from "@mui/material";

import { RecordButtonProps, ViewMode } from "./types";

export const RecordButton: React.FC<RecordButtonProps> = ({
  className,
  color,
  fontSize = "large",
  viewMode,
  onClick,
}) => {
  return (
    <IconButton color={color} className={className} onClick={onClick}>
      {viewMode === ViewMode.StandBy && <MicIcon fontSize={fontSize} />}
      {viewMode === ViewMode.Recording && (
        <StopCircleIcon color="error" fontSize={fontSize} />
      )}
    </IconButton>
  );
};
