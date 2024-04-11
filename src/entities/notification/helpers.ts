import { notify } from "./actions";

export const notifyError = (err: unknown) => {
  if (err instanceof Error) {
    return notify(err.message, "error");
  }
  return notify("Something went wrong", "error");
};
