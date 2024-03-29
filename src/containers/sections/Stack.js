import React from "react";

function Stack() {
  return (
    <div className="Stack" id="stack">
      <br />
      <p>
        Honestly, I like any language, but I end up working with the usual
        suspects.
      </p>
      <ul>
        <li>
          JavaScript/TypeScript | HTML | CSS
          <ul>
            <li>React</li>
            <li>VueJS</li>
            <li>EmberJs</li>
          </ul>
        </li>
        <li>
          Python
          <ul>
            <li>Bottle</li>
          </ul>
        </li>
        <li>
          PHP
          <ul>
            <li>Laravel</li>
          </ul>
        </li>
        <li> PostgreSQL</li>
        <li> AWS</li>
        <li> Google Cloud</li>
      </ul>
    </div>
  );
}

export default Stack;
