import { ButtonProps } from "../types";

export const ViewMode = {
  Recording: "recording",
  StandBy: "standBy",
} as const;

export type ViewMode = (typeof ViewMode)[keyof typeof ViewMode];

export type RecordButtonProps = ButtonProps & {
  viewMode: ViewMode;
};
