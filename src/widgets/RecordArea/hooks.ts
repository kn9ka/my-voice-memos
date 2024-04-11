import { useCallback, useEffect } from "react";

import { UseKeyboardShortcutsProps } from "./types";

export const useKeyboardShortcuts = ({
  onDownEsc,
}: UseKeyboardShortcutsProps) => {
  const handleKeyboardEvent = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape": {
          onDownEsc?.();
          break;
        }

        default: {
          break;
        }
      }
    },
    [onDownEsc]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardEvent);

    return () => document.removeEventListener("keydown", handleKeyboardEvent);
  }, [handleKeyboardEvent]);

  return null;
};
