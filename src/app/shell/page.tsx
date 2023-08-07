"use client";

import { JetBrains_Mono } from "next/font/google";
import Prompt from "./components/Prompt";
import Login from "./components/Login";
import { createContext, useState } from "react";
import registry from "./lib/registry";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin-ext"] });

export default function Shell() {
  const registryLabels = registry.map((r) => r.label);

  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  const ScreenContext = createContext([]);

  const [command, setCommand] = useState("");

  function submitCommand() {
    const [commandLabel, ...commandArgs] = command.split(" ");
    registry.find((r) => r.label == commandLabel)?.call(...commandArgs);
  }

  // TODO: differenciate login from register
  // TODO: use context to append content to screen
  return (
    <main className="p-16 min-h-full">
      {/* custom pointer */}
      <article
        className={`w-full h-full p-5 border-4 border-choco-milk bg-slate-800 text-white ${jetBrainsMono.className}`}
      >
        <ScreenContext.Provider value={}>
          <section>
            {username == null ? (
              <Login />
            ) : (
              <Prompt
                pos1={`/home/${username}`}
                pos2={`[${username}]`}
                value={command}
                handler={setCommand}
                onSubmit={submitCommand}
                highlighter={() =>
                  registryLabels.includes(command.split(" ")[0])
                }
              />
            )}
          </section>
        </ScreenContext.Provider>
      </article>
    </main>
  );
}
