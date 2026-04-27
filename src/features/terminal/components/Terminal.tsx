/* eslint-disable jsx-a11y/no-static-element-interactions */
import type { ChangeEvent, KeyboardEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import "./Terminal.css";
import Cursor from "./Cursor";
import TerminalEntryView from "./TerminalEntryView";
import type { TerminalHistoryEntry as TerminalEntry } from "../model/terminalReducer";

const cliUserString = "$";
const noop = () => {};

interface TerminalProps {
  history: TerminalEntry[];
  executeCommand: (command: string) => void;
}

function Terminal({ history, executeCommand }: TerminalProps) {
  const commandLineRef = useRef<HTMLInputElement>(null);
  const [commandLine, setCommandLine] = useState("");

  const focusCommandLine = useCallback(() => {
    commandLineRef.current?.focus();
  }, []);

  useEffect(() => {
    focusCommandLine();
    document.addEventListener("keydown", focusCommandLine, false);

    return () => {
      document.removeEventListener("keydown", focusCommandLine, false);
    };
  }, [focusCommandLine]);

  useEffect(() => {
    if (typeof commandLineRef.current?.scrollIntoView === "function") {
      commandLineRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    executeCommand(commandLine);
    setCommandLine("");
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCommandLine(event.target.value);
  }

  return (
    <div className="Terminal crt" id="terminal">
      <div className="window">
        {history.map((entry) => (
          <TerminalEntryView
            key={entry.id}
            entry={entry}
            executeCommand={executeCommand}
            prompt={cliUserString}
          />
        ))}
        <div
          className="line-wrapper"
          onKeyDown={noop}
          onClick={focusCommandLine}
        >
          <span>{cliUserString}&nbsp;</span>
          <input
            onKeyDown={handleSubmit}
            onChange={handleChange}
            className="line"
            type="text"
            value={commandLine}
            style={{ width: `${commandLine.length}ch` }}
            ref={commandLineRef}
          />
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <Cursor inputRef={commandLineRef} />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
