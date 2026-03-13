"use client";

import { useState } from "react";
import GridBackground from "./components/ui/GridBackground";
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

            <button className="px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-500 transition">
              GitHub Login
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

          <div className="bg-[#0c0c0c] border border-[#1f2937] rounded-xl overflow-hidden shadow-xl">

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

          </div>

        </section>

      </GridBackground>

      {/* VIDEO */}

      {showVideo && (

        <section className="max-w-[900px] mx-auto px-6 pb-20">

          <div className="rounded-xl border border-[#1f2937] overflow-hidden shadow-lg">

            <video className="w-full" controls>
              <source src="/videos/setup.mp4" type="video/mp4" />
            </video>

          </div>

        </section>

      )}

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

          <h2 className="text-4xl font-bold mb-6">
            From Repository to Automated Engineering
          </h2>

          <p className="text-slate-400 mb-16 max-w-2xl mx-auto">

            SWE Agent orchestrates an intelligent pipeline that
            analyzes repositories, detects issues and generates
            automated development insights.

          </p>

          <div className="grid md:grid-cols-4 gap-8">

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