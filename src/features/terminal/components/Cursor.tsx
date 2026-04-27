/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { RefObject } from "react";
import { useEffect, useState } from "react";

interface CursorProps {
  inputRef: RefObject<HTMLInputElement | null>;
}

function Cursor({ inputRef }: CursorProps) {
  const [cursor, setCursor] = useState("");

  function focusInput() {
    inputRef.current?.focus();
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setCursor((currentCursor) => (currentCursor === "" ? "\u2588" : ""));
    }, 530);

    return () => clearInterval(timerId);
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <span className="Cursor" id="cursor" onClick={focusInput}>
      {cursor}
    </span>
  );
}

export default Cursor;
