import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <main>
      <p className="eyebrow">AI-POWERED FORM PLATFORM</p>
      <h1>Forma<span>Flow</span></h1>
      <p>Build smarter forms. Simplify complex workflows.</p>
      <div className="panel">
        <h2>Your workspace is ready.</h2>
        <p>Dynamic schemas and intelligent form workflows start here.</p>
        <span className="status">Foundation initialized</span>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);
