import "./Help.css";
import { terminalCommands } from "../model/terminalCommands";

interface HelpProps {
  executeCommand: (command: string) => void;
  text?: string;
}

function Help({ executeCommand, text = "Try these commands: " }: HelpProps) {
  return (
    <div className="Help" id="help">
      <span>{text}</span>
      {terminalCommands.map((command) => (
        <button
          key={command.id}
          className="options"
          type="button"
          onClick={() => executeCommand(command.id)}
        >
          {command.label}
        </button>
      ))}
    </div>
  );
}

export default Help;
