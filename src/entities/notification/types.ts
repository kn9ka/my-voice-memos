export const NotificationType = {
  Success: "success",
  Error: "error",
} as const;

export type NotificationType =
  (typeof NotificationType)[keyof typeof NotificationType];
