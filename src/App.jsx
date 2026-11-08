import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-10 text-center shadow-2xl">
        <h1 className="mb-4 text-4xl font-bold text-green-400">
          Tailwind CSS is Working!
        </h1>

        <p className="mb-8 text-zinc-400">Vite + React + Tailwind CSS v4</p>

        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Count: {count}
        </button>

        <p className="mt-6 text-sm text-zinc-500">
          If the button works and the page is styled, everything is set up
          correctly.
        </p>
      </div>
    </div>
  );
}

export default App;
