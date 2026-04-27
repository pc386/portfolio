import { useCallback, useRef, useState } from "react";

const sectionCommands = new Set([
  "about",
  "projects",
  "stack",
  "resume",
  "contact",
]);

function useTerminalHistory() {
  const [history, setHistory] = useState([]);
  const nextIdRef = useRef(0);

  const createEntry = useCallback((entry) => {
    nextIdRef.current += 1;
    return {
      id: nextIdRef.current,
      ...entry,
    };
  }, []);

  const executeCommand = useCallback(
    (enteredCommand) => {
      const normalizedCommand = enteredCommand.toLowerCase().trim();

      setHistory((currentHistory) => {
        const commandLine = createEntry({
          type: "line",
          text: enteredCommand,
          showPrompt: true,
        });

        if (normalizedCommand === "clear") {
          return [];
        }

        if (normalizedCommand === "") {
          return [...currentHistory, commandLine];
        }

        if (normalizedCommand === "help") {
          return [
            ...currentHistory,
            commandLine,
            createEntry({ type: "help" }),
          ];
        }

        if (sectionCommands.has(normalizedCommand)) {
          return [
            ...currentHistory,
            commandLine,
            createEntry({ type: "section", command: normalizedCommand }),
          ];
        }

        return [
          ...currentHistory,
          commandLine,
          createEntry({
            type: "line",
            text: `'${enteredCommand}': command not found!`,
            showPrompt: false,
          }),
          createEntry({ type: "help" }),
        ];
      });
    },
    [createEntry],
  );

  return { history, executeCommand };
}

export default useTerminalHistory;
