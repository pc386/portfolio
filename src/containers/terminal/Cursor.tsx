/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";

interface CursorProps {
  focusCommandLine: () => void;
}

function Cursor({ focusCommandLine }: CursorProps) {
  const [cursor, setCursor] = useState("");

  useEffect(() => {
    const timerId = setInterval(() => {
      setCursor((currentCursor) => (currentCursor === "" ? "\u2588" : ""));
    }, 530);

    return () => clearInterval(timerId);
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <span className="Cursor" id="cursor" onClick={focusCommandLine}>
      {cursor}
    </span>
  );
}

export default Cursor;
