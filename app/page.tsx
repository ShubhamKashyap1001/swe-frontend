"use client";

import { useState } from "react";
import GridBackground from "./components/ui/GridBackground";
import TechStack from "./components/TechStack";
import { CometCard } from "./components/ui/comet-card"
import Link from "next/link";
import {
  Key,
  Brain,
  Zap,
  Shield,
  MessageSquare,
  Database
} from "lucide-react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="text-white">

      {/* NAVBAR */}

      <nav className="border-b border-[#1f2937] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <h1 className="text-lg font-bold text-green-500">
            SWE Agent
          </h1>

          <div className="flex gap-4">

            <button className="px-4 py-2 border border-green-500 rounded-lg hover:bg-green-500/20 transition">
              Download
            </button>
          </div>

        </div>
      </nav>

      {/* HERO */}

      <GridBackground>

        <section className="max-w-6xl mx-auto px-6 pt-28 pb-24 grid md:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-green-400 text-sm border border-green-500/30 px-3 py-1 rounded-full">
              OPEN SOURCE
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">

              Software Engineering
              <br />
              Agent Platform

            </h1>

            <p className="text-slate-400 text-lg mt-6 max-w-xl">

              SWE Agent automatically analyzes repositories,
              generates issues, manages API keys and automates
              development workflows using AI.

            </p>

            <div className="flex gap-4 mt-8">

              <Link
                href="/dashboard"
                className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition"
              >
                Open Dashboard
              </Link>

              <button
                onClick={() => setShowVideo(true)}
                className="border-b border-green-500 text-green-400 opacity-80 hover:opacity-100 transition"
              >
                Watch Setup Demo
              </button>

            </div>

          </div>

          {/* CODE WINDOW */}

          {/* <div className="bg-[#0c0c0c] border border-[#1f2937] rounded-xl overflow-hidden shadow-xl">

            <div className="flex items-center gap-2 px-4 py-2 border-b border-[#1f2937]">

              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />

              <span className="ml-auto text-xs text-slate-400">
                swe_agent_demo.ts
              </span>

            </div>

            <pre className="p-6 text-sm text-green-400 font-mono overflow-x-auto">

{`import { sweAgent } from "@swe-agent/core"

await sweAgent.run({
 repo: "github.com/user/project",
 task: "Analyze codebase"
})

✓ scanning repository
✓ detecting bugs
✓ generating GitHub issues
✓ optimizing workflow`}

            </pre>

          </div> */}
          <CometCard>

  <div
    className="
    bg-[#0c0c0c]
    border
    border-[#1f2937]
    rounded-xl
    overflow-hidden
    shadow-xl
    transition
    hover:border-green-500
    "
  >

    {/* TERMINAL HEADER */}

    <div
      className="
      flex
      items-center
      gap-2
      px-4
      py-2
      border-b
      border-[#1f2937]
      bg-[#090909]
      "
    >

      <div className="w-3 h-3 bg-red-500 rounded-full" />
      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
      <div className="w-3 h-3 bg-green-500 rounded-full" />

      <span className="ml-auto text-xs text-slate-400 font-mono">
        swe_agent_demo.ts
      </span>

    </div>

    {/* TERMINAL CODE */}

    <pre
      className="
      p-6
      text-sm
      text-green-400
      font-mono
      overflow-x-auto
      leading-relaxed
      "
    >

{`import { sweAgent } from "@swe-agent/core"

await sweAgent.run({
 repo: "github.com/user/project",
 task: "Analyze codebase"
})

✓ scanning repository
✓ detecting bugs
✓ generating GitHub issues
✓ optimizing workflow
`}

    </pre>

  </div>

</CometCard>

        </section>

      </GridBackground>

      {/* VIDEO */}

{showVideo && (

  <div className="bg-[#050505] w-full flex justify-center pt-6 pb-10">

    <div className="relative w-full max-w-[900px] px-6">

      {/* CLOSE BUTTON */}

      <button
        onClick={() => setShowVideo(false)}
        className="
        absolute
        -top-4
        -right-2
        w-8
        h-8
        rounded-full
        border
        border-[#1f2937]
        bg-[#0c0c0c]
        flex
        items-center
        justify-center
        text-slate-400
        hover:text-white
        hover:border-green-500
        transition
        "
      >
        ✕
      </button>

      {/* VIDEO */}

      <div className="rounded-xl border border-[#1f2937] overflow-hidden shadow-xl">

        <video
          className="w-full"
          controls
        >
          <source src="/videos/setup.mp4" type="video/mp4" />
        </video>

      </div>

    </div>

  </div>

)}
      <TechStack />

      {/* FEATURES */}

      <section className="py-24 bg-[#060606]">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">

            Everything you need to build faster

          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <FeatureCard
              icon={<Key />}
              title="API Key Management"
              desc="Securely manage OpenAI, Gemini and other provider API keys."
            />

            <FeatureCard
              icon={<Brain />}
              title="AI Code Analysis"
              desc="Analyze repositories and detect bugs automatically."
            />

            <FeatureCard
              icon={<Zap />}
              title="Workflow Automation"
              desc="Automate engineering workflows with AI agents."
            />

            <FeatureCard
              icon={<Database />}
              title="Context Assembly"
              desc="Gather relevant files and docs for accurate AI reasoning."
            />

            <FeatureCard
              icon={<Shield />}
              title="Secure Processing"
              desc="Your code is never used for training AI models."
            />

            <FeatureCard
              icon={<MessageSquare />}
              title="Interactive Feedback"
              desc="Developers can interact with AI directly in issues."
            />

          </div>

        </div>

      </section>

      {/* PIPELINE */}

      <section className="py-24 border-t border-[#1f2937]">

        <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-xs font-bold uppercase tracking-widest mb-4">The Pipeline</div>

          <h2 className="text-4xl font-serif font-bold mb-6">
            From PR to Merged.
          </h2>

          <p className="text-slate-400 mb-16 max-w-2xl mx-auto">

            SWE Agent orchestrates an intelligent pipeline that
            analyzes repositories, detects issues and generates
            automated development insights.

          </p>

          {/* <div className="grid md:grid-cols-4 gap-8">

            <PipelineCard
              step="01"
              title="Static Analysis"
              desc="Detect syntax errors and vulnerabilities."
            />

            <PipelineCard
              step="02"
              title="Complexity Scoring"
              desc="Analyze pull request complexity."
            />

            <PipelineCard
              step="03"
              title="Context Assembly"
              desc="Fetch relevant files and docs."
            />

            <PipelineCard
              step="04"
              title="AI Validation"
              desc="Generate issues and suggestions."
            />

          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">

  {/* CARD 1 */}

  <div className="group relative">
    <div className="h-full bg-[#0c0c0c] border border-[#1f2937] rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-green-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="w-12 h-12 rounded-2xl bg-[#111] border border-[#1f2937] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#151515] transition-all duration-300 shadow-sm relative z-10">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" className="w-6 h-6 text-yellow-400">

          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />

        </svg>

      </div>

      <h3 className="text-xl font-bold text-white mb-3 relative z-10">
        Static Analysis
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed relative z-10">
        AST-based detectors instantly flag syntax errors, security risks, and anti-patterns.
      </p>

      <div className="absolute -bottom-6 -right-6 text-8xl font-black text-[#1f2937] select-none pointer-events-none">
        01
      </div>

    </div>
  </div>


  {/* CARD 2 */}

  <div className="group relative">
    <div className="h-full bg-[#0c0c0c] border border-[#1f2937] rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-green-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="w-12 h-12 rounded-2xl bg-[#111] border border-[#1f2937] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#151515] transition-all duration-300 shadow-sm">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" className="w-6 h-6 text-blue-400">

          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />

        </svg>

      </div>

      <h3 className="text-xl font-bold text-white mb-3">
        Complexity Scoring
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed">
        The diff is analyzed for size and risk to determine the optimal review depth.
      </p>

      <div className="absolute -bottom-6 -right-6 text-8xl font-black text-[#1f2937]">
        02
      </div>

    </div>
  </div>


  {/* CARD 3 */}

  <div className="group relative">
    <div className="h-full bg-[#0c0c0c] border border-[#1f2937] rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-green-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="w-12 h-12 rounded-2xl bg-[#111] border border-[#1f2937] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#151515] transition-all duration-300 shadow-sm">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" className="w-6 h-6 text-purple-400">

          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />

        </svg>

      </div>

      <h3 className="text-xl font-bold text-white mb-3">
        Context Assembly
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed">
        RAG engine fetches relevant files, types, and docs to give the AI full context.
      </p>

      <div className="absolute -bottom-6 -right-6 text-8xl font-black text-[#1f2937]">
        03
      </div>

    </div>
  </div>


  {/* CARD 4 */}

  <div className="group relative">
    <div className="h-full bg-[#0c0c0c] border border-[#1f2937] rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-green-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="w-12 h-12 rounded-2xl bg-[#111] border border-[#1f2937] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#151515] transition-all duration-300 shadow-sm">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" className="w-6 h-6 text-green-400">

          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />

        </svg>

      </div>

      <h3 className="text-xl font-bold text-white mb-3">
        AI Validation
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed">
        Gemini/OpenAI validates findings and provides actionable feedback.
      </p>

      <div className="absolute -bottom-6 -right-6 text-8xl font-black text-[#1f2937]">
        04
      </div>

    </div>
  </div>

</div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-[#1f2937] py-12 text-slate-400">

        <div className="max-w-6xl mx-auto px-6">

          <h3 className="text-xl font-bold text-green-500 mb-2">
            SWE Agent
          </h3>

          <p className="max-w-lg text-sm">

            AI powered developer platform for managing APIs,
            automating workflows and analyzing repositories.

          </p>

          <p className="mt-6 text-xs">
            © 2026 SWE Agent
          </p>

        </div>

      </footer>

    </div>
  );
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div
      className="
      relative
      bg-[#0c0c0c]
      border border-[#1f2937]
      rounded-xl
      p-6
      transition
      hover:-translate-y-1
      hover:border-green-500
      hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]
    "
    >

      <div className="text-green-400 mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-lg mb-2">
        {title}
      </h3>

      <p className="text-slate-400 text-sm">
        {desc}
      </p>

    </div>
  );
}

function PipelineCard({ step, title, desc }: any) {
  return (
    <div
      className="
      bg-[#0c0c0c]
      border border-[#1f2937]
      rounded-xl
      p-6
      transition
      hover:border-green-500
      hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]
    "
    >

      <span className="text-green-400 text-sm">
        {step}
      </span>

      <h3 className="font-semibold mt-2 mb-2">
        {title}
      </h3>

      <p className="text-slate-400 text-sm">
        {desc}
      </p>

    </div>
  );
}