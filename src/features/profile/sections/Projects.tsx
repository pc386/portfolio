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
      <p>
        Here are some pics:{" "}
        <a href="https://imgur.com/a/gMVSkJf" target="_blank" rel="noreferrer">
          Imgur album
        </a>
      </p>
      <h4>RAG Chatbot</h4>
      <p>
        I built a retrieval augmented generation chatbot for an online community
        I am very active in. There is a lot of valuable content spread across
        different platforms, and the goal of the project is to help people find
        the right source when they have a question instead of guessing where the
        answer might already exist.
      </p>
      <p>Stack: Python, TypeScript, React, Vue, PostgreSQL.</p>
      <p>The architecture has three main parts:</p>
      <ul>
        <li>
          data loaders for YouTube videos, Reddit posts, books, essays, and
          blogs
        </li>
        <li>chunking and indexing for semantic search</li>
        <li>
          a chat application with a retriever that finds the right documents
        </li>
      </ul>
      <p>
        The ingestion layer is the part I find most interesting. I built a
        separate loader for each source, each with its own scraping strategy.
        For YouTube specifically, I designed a dedicated pipeline:
      </p>
      <ul>
        <li>
          <strong>Youloader:</strong> downloads videos, converts them to audio,
          and stores them in a bucket
        </li>
        <li>
          <strong>Transcriptor:</strong> transcribes the audio, detects
          speakers, and aligns language to the correct timestamps
        </li>
        <li>
          <strong>Transcriptor-Web:</strong> a full-stack human-in-the-loop app
          for cleaning transcripts, fixing model errors, and assigning speakers
        </li>
      </ul>
      <p>
        The final output is a normalized document set stored in a database and
        ready for retrieval and response generation.
      </p>
      <h4>Terminal Portfolio</h4>
      <p>
        You can find this portfolio{" "}
        <a
          href="https://github.com/pc386/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          on GitHub
        </a>
        . It&apos;s made with react, the best reactive framework. ESlint helps
        with keeping best practices and code smell, however good design comes
        only with experience. Any feedback is greatly appreciated!
      </p>
    </div>
  );
}

export default Projects;
