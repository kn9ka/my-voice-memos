import { IconButtonProps, IconProps } from "@mui/material";

export type ButtonProps = {
  className?: string;
  color?: IconButtonProps["color"];
  fontSize?: IconProps["fontSize"];
  onClick?: (e: React.SyntheticEvent) => void;
};
