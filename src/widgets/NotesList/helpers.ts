import { parseISO } from "date-fns";

export const getTimestamp = (dateString: string) => {
  return parseISO(dateString).getTime();
};

export const sortDatesASC = (left: string, right: string) => {
  if (getTimestamp(left) > getTimestamp(right)) {
    return -1;
  }
  if (getTimestamp(left) > getTimestamp(right)) {
    return 1;
  }

  return 0;
};
