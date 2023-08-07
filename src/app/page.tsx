"use client";

import { JetBrains_Mono } from "next/font/google";
import Tip from "@/components/Tip";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin-ext"] });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Intro />
      <Skills />
    </main>
  );
}

function Intro() {
  const [aside, toggleAside] = useState(false);

  return (
    <article className="flex">
      <section className="p-20">
        <h1 className="text-2xl font-bold pb-8">
          Hello! My name is <Tip msg={"It's pronnounced 'George'"}>Jorge</Tip>
          <span className="text-lg font-normal text-gray-600 ml-2">
            {/* (they/he) */}
          </span>
        </h1>
        <p>
          I am a high school student currently living in São Paulo, Brazil. I've
          been studying computer programming for the past 4 years alongside many
          friends and mentors. This website is a testament to what I've learned
          - among other silly things
          <span className={jetBrainsMono.className}> ;)</span>
        </p>
      </section>
      <aside
        className={`bg-mustard-base flex items-center transition-all duration-300 px-5 ${
          aside ? "w-full" : "w-max"
        }`}
      >
        <button
          onClick={() => toggleAside(!aside)}
          className={`transition-all rounded-full bg-opacity-0 hover:bg-opacity-40 bg-choco-base ${
            aside ? "rotate-180" : ""
          }`}
        >
          <ChevronLeftIcon className="text-black h-12 w-12 p-2" />
        </button>
      </aside>
    </article>
  );
}

function Skills() {
  return (
    <article className="bg-cream-vanilla px-16 py-12">
      <h2 className="text-2xl font-bold pb-6">Skills</h2>
      <section className="flex gap-3 w-full">
        <div className="rounded p-3 flex-1 bg-mustard-base">
          <h3 className="text-lg font-semibold text-avocado-mature">
            Programming languages
          </h3>
          <ul>
            <li>HTML, CSS, JS, TS</li>
            <li>Java, C#</li>
            <li>Python, Go</li>
            <li>
              <Tip msg="Yeah I know...">PHP</Tip>
            </li>
          </ul>
        </div>
        <div className="rounded p-3 flex-1 bg-avocado-base">
          <h3 className="text-lg font-semibold text-mustard-with-mayo">
            Frameworks & Technologies
          </h3>
          <ul>
            <li>Django, Next.JS, Dotnet Core</li>
          </ul>
        </div>
        <div className="rounded p-3 flex-1 bg-mustard-base">
          <h3 className="text-lg font-semibold text-avocado-mature">
            Platforms
          </h3>
          <ul>
            <li>Firebase</li>
            <li>Azure Cloud</li>
          </ul>
        </div>
      </section>
    </article>
  );
}
