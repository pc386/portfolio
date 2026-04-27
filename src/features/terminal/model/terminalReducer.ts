import type { TerminalCommandId } from "./terminalCommands";
import { isTerminalCommandId } from "./terminalCommands";

export type TerminalHistoryEntry =
  | {
      id: number;
      type: "line";
      text: string;
      showPrompt: boolean;
    }
  | {
      id: number;
      type: "help";
    }
  | {
      id: number;
      type: "section";
      command: TerminalCommandId;
    };

type NewTerminalHistoryEntry =
  | {
      type: "line";
      text: string;
      showPrompt: boolean;
    }
  | {
      type: "help";
    }
  | {
      type: "section";
      command: TerminalCommandId;
    };

type TerminalState = {
  history: TerminalHistoryEntry[];
  nextEntryId: number;
};

type TerminalAction = {
  type: "command.executed";
  commandText: string;
};

export const initialTerminalState: TerminalState = {
  history: [],
  nextEntryId: 1,
};

function createEntry(
  state: TerminalState,
  entry: NewTerminalHistoryEntry,
): [TerminalState, TerminalHistoryEntry] {
  const createdEntry = {
    id: state.nextEntryId,
    ...entry,
  } as TerminalHistoryEntry;

  return [
    {
      ...state,
      nextEntryId: state.nextEntryId + 1,
    },
    createdEntry,
  ];
}

function appendEntries(
  state: TerminalState,
  entries: NewTerminalHistoryEntry[],
): TerminalState {
  const nextState = entries.reduce(
    (currentState, entry) => {
      const [updatedState, createdEntry] = createEntry(currentState, entry);
      return {
        ...updatedState,
        history: [...updatedState.history, createdEntry],
      };
    },
    {
      ...state,
      history: [...state.history],
    },
  );

  return nextState;
}

export function terminalReducer(
  state: TerminalState,
  action: TerminalAction,
): TerminalState {
  if (action.type !== "command.executed") {
    return state;
  }

  const normalizedCommand = action.commandText.toLowerCase().trim();

  if (normalizedCommand === "clear") {
    return {
      history: [],
      nextEntryId: state.nextEntryId,
    };
  }

  const commandLineEntry = {
    type: "line" as const,
    text: action.commandText,
    showPrompt: true,
  };

  if (normalizedCommand === "") {
    return appendEntries(state, [commandLineEntry]);
  }

  if (normalizedCommand === "help") {
    return appendEntries(state, [commandLineEntry, { type: "help" }]);
  }

  if (isTerminalCommandId(normalizedCommand)) {
    return appendEntries(state, [
      commandLineEntry,
      {
        type: "section",
        command: normalizedCommand,
      },
    ]);
  }

  return appendEntries(state, [
    commandLineEntry,
    {
      type: "line",
      text: `'${action.commandText}': command not found!`,
      showPrompt: false,
    },
    { type: "help" },
  ]);
}
