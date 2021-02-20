/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

class Cursor extends React.Component {
  constructor(props) {
    super(props);
    this.focusCommandLine = props.focusCommandLine;
    this.cursor = React.createRef();
    this.state = { cursor: "" };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 530);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const { cursor } = this.state;
    this.setState({
      cursor: cursor === "" ? "\u2588" : "",
    });
  }

  render() {
    const { cursor } = this.state;
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <span className="Cursor" id="cursor" onClick={this.focusCommandLine}>
        {cursor}
      </span>
    );
  }
}

export default Cursor;
