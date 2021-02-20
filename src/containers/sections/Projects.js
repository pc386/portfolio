import React from "react";

function Projects() {
  return (
    <div className="Projects" id="projects">
      <br />
      <h4>GameBoy Zero</h4>
      My favourite project so far is called gameboy zero. It is a raspberry pi
      inside an original gameboy case. <br />
      <br />
      Features following components:
      <ul>
        <li>Raspberry pi 3 model A</li>
        <li>3.5&quot; DPI Screen</li>
        <li>4000 mah LiPo Battery</li>
        <li>Retroarch with emulationstation</li>
      </ul>
      Here are some pics:
      <blockquote
        // eslint-disable-next-line react/no-unknown-property
        class="imgur-embed-pub"
        lang="en"
        data-id="a/gMVSkJf"
        data-context="false"
      >
        <a href="//imgur.com/a/gMVSkJf" target="_blank" rel="noreferrer">
          imgur
        </a>
      </blockquote>
      <script async src="//s.imgur.com/min/embed.js" charset="utf-8" />
      <h4>Terminal Portfolio</h4>
      <p>
        You can find this portfolio{" "}
        <a
          href="https://github.com/Pingu69/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          on gitHub
        </a>
        . It&apos;s made with react, the best reactive framework. ESlint helps
        with keeping best practices and code smell, however good design comes
        only with experience. Any feedback is greatly appreciated!
      </p>
    </div>
  );
}

export default Projects;
