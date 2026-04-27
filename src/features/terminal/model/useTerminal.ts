import { useReducer } from "react";
import { initialTerminalState, terminalReducer } from "./terminalReducer";

function useTerminal() {
  const [state, dispatch] = useReducer(terminalReducer, initialTerminalState);

  function executeCommand(commandText: string) {
    dispatch({
      type: "command.executed",
      commandText,
    });
  }

  return {
    history: state.history,
    executeCommand,
  };
}

export default useTerminal;
