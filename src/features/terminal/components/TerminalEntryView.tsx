import Help from "./Help";
import { getTerminalCommandComponent } from "../model/terminalCommands";
import type { TerminalHistoryEntry as TerminalEntry } from "../model/terminalReducer";

interface TerminalEntryViewProps {
  entry: TerminalEntry;
  executeCommand: (command: string) => void;
  prompt: string;
}

function TerminalEntryView({
  entry,
  executeCommand,
  prompt,
}: TerminalEntryViewProps) {
  if (entry.type === "help") {
    return <Help executeCommand={executeCommand} />;
  }

  if (entry.type === "section") {
    const Section = getTerminalCommandComponent(entry.command);
    return Section ? <Section /> : null;
  }

  return (
    <div className="line-wrapper">
      {entry.showPrompt ? <span>{prompt}&nbsp;</span> : ""}
      <span className="line">{entry.text}</span>
    </div>
  );
}

export default TerminalEntryView;
