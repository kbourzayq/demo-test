import { useState } from "react";

const stack = [
  { name: "React 19", role: "UI components" },
  { name: "Vite 7", role: "Dev server and build" },
  { name: "Vitest", role: "Unit tests" },
  { name: "pnpm", role: "Package manager" },
  { name: "mise", role: "Toolchain and tasks" },
  { name: "Docker", role: "Runtime sandbox" },
];

const commands = [
  { label: "Install dependencies", cmd: "pnpm install" },
  { label: "Start the dev server", cmd: "pnpm dev" },
  { label: "Run the tests", cmd: "pnpm test" },
  { label: "Build for production", cmd: "pnpm build" },
];

const purposes = [
  {
    title: "Not production software",
    body: "This app exists to show how the repository is set up. Nothing here is meant to ship to users.",
  },
  {
    title: "A working reference",
    body: "It installs, runs, tests and builds from a clean checkout, so you can check the repository contract end to end.",
  },
  {
    title: "Safe to change",
    body: "Edit it, break it or delete it. The page you are reading is a single React component in src/App.jsx.",
  },
];

function CopyCommand({ label, cmd }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <li className="command">
      <span className="command-label">{label}</span>
      <div className="command-row">
        <code>{cmd}</code>
        <button type="button" onClick={copy} aria-label={`Copy ${cmd}`}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </li>
  );
}

export function App() {
  return (
    <>
      <header className="topbar">
        <span className="brand">Product Builder Sandbox</span>
        <span className="badge">Demo project</span>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Demo repository</p>
          <h1>A demo project for this repository.</h1>
          <p className="lead">
            This is a small React app that lives in the repository to prove the
            setup works. It is a demo. Use it to see how the project installs,
            starts, tests and builds.
          </p>
          <div className="actions">
            <a className="button primary" href="#run">
              Run the demo
            </a>
            <a className="button" href="#stack">
              See what is inside
            </a>
          </div>
        </section>

        <section aria-labelledby="why">
          <h2 id="why">What this demo is for</h2>
          <div className="grid three">
            {purposes.map((p) => (
              <article key={p.title} className="panel">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" aria-labelledby="stack-title">
          <h2 id="stack-title">What is inside</h2>
          <ul className="grid stack">
            {stack.map((s) => (
              <li key={s.name}>
                <strong>{s.name}</strong>
                <span>{s.role}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="run" aria-labelledby="run-title">
          <h2 id="run-title">Run it yourself</h2>
          <p className="section-note">
            Run these from the repository root. The toolchain is installed by
            mise, and the app can also run inside Docker.
          </p>
          <ul className="commands">
            {commands.map((c) => (
              <CopyCommand key={c.cmd} {...c} />
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>
          Demo project. Replace this page with your own app when you are ready.
        </p>
      </footer>
    </>
  );
}
