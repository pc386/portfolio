import { useCallback, useRef, useState } from "react";

type SectionCommand = "about" | "projects" | "stack" | "resume" | "contact";

type TerminalHistoryEntryBase = {
  id: number;
};

type TerminalLineEntry = TerminalHistoryEntryBase & {
  type: "line";
  text: string;
  showPrompt: boolean;
};

type TerminalHelpEntry = TerminalHistoryEntryBase & {
  type: "help";
};

type TerminalSectionEntry = TerminalHistoryEntryBase & {
  type: "section";
  command: SectionCommand;
};

type NewTerminalHistoryEntry =
  | Omit<TerminalLineEntry, "id">
  | Omit<TerminalHelpEntry, "id">
  | Omit<TerminalSectionEntry, "id">;

export type TerminalHistoryEntry =
  | TerminalLineEntry
  | TerminalHelpEntry
  | TerminalSectionEntry;

const sectionCommands = new Set([
  "about",
  "projects",
  "stack",
  "resume",
  "contact",
]);

function useTerminalHistory() {
  const [history, setHistory] = useState<TerminalHistoryEntry[]>([]);
  const nextIdRef = useRef(0);

  const createEntry = useCallback((entry: NewTerminalHistoryEntry) => {
    nextIdRef.current += 1;
    return {
      id: nextIdRef.current,
      ...entry,
    } as TerminalHistoryEntry;
  }, []);

  const executeCommand = useCallback(
    (enteredCommand: string) => {
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

        if (sectionCommands.has(normalizedCommand as SectionCommand)) {
          return [
            ...currentHistory,
            commandLine,
            createEntry({
              type: "section",
              command: normalizedCommand as SectionCommand,
            }),
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
