/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import "../../styles/Terminal.css";
import Help from "../Help";
import { About, Projects, Resume, Stack, Contact } from "../sections/Sections";
import Cursor from "./Cursor";

const cliUserString = "[user@cekic.xyz]$";

class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.commandLine = React.createRef();
    this.hiddenCommandLine = React.createRef();
    this.state = {
      history: [],
    };
    this.history = [];
    this.handleInput = this.handleInput.bind(this);
    this.focusCommandLine = this.focusCommandLine.bind(this);
    this.executeCommand = this.executeCommand.bind(this);
  }

  componentDidMount() {
    this.focusCommandLine();
    this.changeCommandLineWidth();
    document.addEventListener("keydown", this.focusCommandLine, false);
  }

  scrollToBottom() {
    this.commandLine.current.scrollIntoView({ behavior: "smooth" });
  }

  handleInput(e) {
    this.changeCommandLineWidth();
    if (e.key === "Enter") {
      const enteredCommand = e.target.value;
      this.executeCommand(enteredCommand);
    }
  }

  changeCommandLineWidth() {
    this.commandLine.current.style.width = `${this.commandLine.current.value.length}ch`;
  }

  executeCommand(enteredCommand) {
    this.addLine(enteredCommand);
    switch (enteredCommand.toLowerCase().trim()) {
      case "clear":
        this.clear();
        break;
      case "help":
        this.help();
        break;
      case "about":
        this.insertIntoWindow(<About />);
        break;
      case "projects":
        this.insertIntoWindow(<Projects />);
        break;
      case "stack":
        this.insertIntoWindow(<Stack />);
        break;
      case "resume":
        this.insertIntoWindow(<Resume />);
        break;
      case "contact":
        this.insertIntoWindow(<Contact />);
        break;
      case "":
        break;
      default:
        this.error(enteredCommand);
        break;
    }
  }

  addLine(lineText, addUserString = true) {
    const currentLine = (
      <div className="line-wrapper">
        {addUserString ? <span>{cliUserString}&nbsp;</span> : ""}
        <span className="line">{lineText}</span>
      </div>
    );
    this.history = [...this.history, currentLine];
    this.setState(
      {
        history: [...this.history],
      },
      this.scrollToBottom
    );
    this.commandLine.current.value = "";
    this.changeCommandLineWidth();
  }

  clear() {
    this.history = [];
    this.setState({
      history: [],
    });
  }

  help() {
    const help = <Help executeCommand={this.executeCommand} />;
    this.insertIntoWindow(help);
  }

  error(cmd) {
    const errorMsg = `'${cmd}': command not found!`;
    this.addLine(errorMsg, false);
    this.help();
  }

  focusCommandLine() {
    this.commandLine.current.focus();
  }

  insertIntoWindow(stuff) {
    this.history = [...this.history, stuff];

    this.setState({
      history: [...this.history],
    });
  }

  render() {
    const { history } = this.state;

    return (
      <div className="Terminal" id="terminal">
        <div className="window">
          {history}
          <div
            className="line-wrapper"
            onKeyDown={() => {}}
            onClick={this.focusCommandLine}
          >
            <span>{cliUserString}&nbsp;</span>
            <input
              onKeyDown={this.handleInput}
              onChange={this.handleInput}
              className="line"
              type="text"
              ref={this.commandLine}
            />
            <Cursor focusCommandLine={this.focusCommandLine} />
          </div>
        </div>
      </div>
    );
  }
}

export default Terminal;
