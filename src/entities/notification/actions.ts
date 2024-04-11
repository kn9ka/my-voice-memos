import { NotificationType } from "./types";

export const notify = (msg: string, type: NotificationType) => {
  if (type === NotificationType.Error) {
    console.error(msg);
  }
  if (type === NotificationType.Success) {
    console.log(msg);
  }
};
