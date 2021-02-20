import React from "react";
import "../styles/Help.css";

function Help({ executeCommand, text = "Try these commands: " }) {
  return (
    <div className="Help" id="help">
      <span>{text}</span>
      <button
        className="options"
        type="button"
        onClick={() => executeCommand("about")}
      >
        About
      </button>
      <button
        className="options"
        type="button"
        onClick={() => executeCommand("projects")}
      >
        Projects
      </button>
      <button
        className="options"
        type="button"
        onClick={() => executeCommand("stack")}
      >
        Stack
      </button>
      <button
        className="options"
        type="button"
        onClick={() => executeCommand("resume")}
      >
        Resume
      </button>
      <button
        className="options"
        type="button"
        onClick={() => executeCommand("contact")}
      >
        Contact
      </button>
    </div>
  );
}
export default Help;
