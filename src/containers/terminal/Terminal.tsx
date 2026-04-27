/* eslint-disable jsx-a11y/no-static-element-interactions */
import type { ComponentType, KeyboardEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import "../../styles/Terminal.css";
import Help from "../Help";
import { About, Projects, Resume, Stack, Contact } from "../sections/Sections";
import Cursor from "./Cursor";
import type { TerminalHistoryEntry } from "./useTerminalHistory";

const cliUserString = "[user@cekic.xyz]$";

interface HistoryEntryProps {
  entry: TerminalHistoryEntry;
  executeCommand: (command: string) => void;
}

interface TerminalProps {
  history: TerminalHistoryEntry[];
  executeCommand: (command: string) => void;
}

const sectionComponents: Record<string, ComponentType> = {
  about: About,
  projects: Projects,
  stack: Stack,
  resume: Resume,
  contact: Contact,
};

function HistoryEntry({ entry, executeCommand }: HistoryEntryProps) {
  if (entry.type === "help") {
    return <Help executeCommand={executeCommand} />;
  }

  if (entry.type === "section") {
    const Section = sectionComponents[entry.command];
    return Section ? <Section /> : null;
  }

  return (
    <div className="line-wrapper">
      {entry.showPrompt ? <span>{cliUserString}&nbsp;</span> : ""}
      <span className="line">{entry.text}</span>
    </div>
  );
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

  return (
    <div className="Terminal crt" id="terminal">
      <div className="window">
        {history.map((entry) => (
          <HistoryEntry
            key={entry.id}
            entry={entry}
            executeCommand={executeCommand}
          />
        ))}
        <div
          className="line-wrapper"
          onKeyDown={() => {}}
          onClick={focusCommandLine}
        >
          <span>{cliUserString}&nbsp;</span>
          <input
            onKeyDown={handleSubmit}
            onChange={(event) => setCommandLine(event.target.value)}
            className="line"
            type="text"
            value={commandLine}
            style={{ width: `${commandLine.length}ch` }}
            ref={commandLineRef}
          />
          <Cursor focusCommandLine={focusCommandLine} />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
