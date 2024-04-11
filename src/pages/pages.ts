export const Page = {
  Main: "main",
} as const;

export type Page = (typeof Page)[keyof typeof Page];
