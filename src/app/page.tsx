import { JetBrains_Mono } from "next/font/google";
import Tip from "@/components/Tip";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin-ext"] });

export default function Home() {
  return (
    <main className="min-h-screen">
      <article className="flex">
        <section className="p-20">
          <h1 className="text-2xl font-bold pb-8">
            Hello! My name is <Tip msg={"It's pronnounced 'George'"}>Jorge</Tip>
            <span className="text-lg font-normal text-gray-600 ml-2">
              {/* (they/he) */}
            </span>
          </h1>
          <p>
            I am a high school student currently living in São Paulo, Brazil.
            I've been studying computer programming for the past 4 years
            alongside many friends and mentors. This website is a testament
            to what I've learned - among other silly things{" "}
            <span className={jetBrainsMono.className}>;)</span>
          </p>
        </section>
        <aside className="bg-slate-800 p-10">hello</aside>
      </article>
    </main>
  );
}
