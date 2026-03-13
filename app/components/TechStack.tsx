"use client";

import { useState } from "react";
import Image from "next/image";

export default function TechStack() {
  const [active, setActive] = useState("openai");

  const tech = [
    {
      id: "gemini",
      name: "Gemini",
      icon: "/icons/gemini.png"
    },
    {
      id: "openai",
      name: "OpenAI",
      icon: "/icons/openai.png"
    },
    {
      id: "github",
      name: "GitHub",
      icon: "/icons/github.png"
    },
    {
      id: "sarvam",
      name: "Sarvam AI",
      icon: "/icons/sarvam.png"
    }
  ];

  return (
    <section className="py-24 border-t border-[#1f2937]">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* USER TRUST */}

        <div className="flex items-center justify-center gap-4 mb-10">

          <div className="flex -space-x-2">

            <Image
              src="/users/u1.jpg"
              width={36}
              height={36}
              alt="user"
              className="rounded-full border border-black"
            />

            <Image
              src="/users/u2.jpg"
              width={36}
              height={36}
              alt="user"
              className="rounded-full border border-black"
            />

            <Image
              src="/users/u3.jpg"
              width={36}
              height={36}
              alt="user"
              className="rounded-full border border-black"
            />

            <Image
              src="/users/u4.jpg"
              width={36}
              height={36}
              alt="user"
              className="rounded-full border border-black"
            />

          </div>

          <div className="text-left text-sm text-slate-400">
            <span className="text-white font-semibold">
              1000+ Developers
            </span>
            <br />
            use SWE Agent
          </div>

        </div>

        {/* TITLE */}

        <p className="text-xs tracking-widest text-slate-500 mb-4">
          POWERING THE FUTURE
        </p>

        <p className="text-slate-400 mb-12">
          SWE Agent integrates with leading AI platforms
        </p>

        {/* ICONS */}

        <div className="flex justify-center gap-12">

          {tech.map((item) => (

            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="flex flex-col items-center gap-3 group"
            >

              <div
                className={`
                w-16 h-16 rounded-xl flex items-center justify-center
                border transition
                ${
                  active === item.id
                    ? "border-green-500 bg-green-500/10"
                    : "border-[#1f2937]"
                }
                `}
              >

                <Image
                  src={item.icon}
                  width={32}
                  height={32}
                  alt={item.name}
                />

              </div>

              <span
                className={`
                text-sm tracking-wide
                ${
                  active === item.id
                    ? "text-green-400"
                    : "text-slate-400"
                }
                `}
              >
                {item.name}
              </span>

            </button>

          ))}

        </div>

      </div>

    </section>
  );
}