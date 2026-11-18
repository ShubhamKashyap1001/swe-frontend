"use client";

import Image from "next/image";

export default function TechStack() {
  const tech = [
    {
      id: "gemini-color",
      name: "Gemini",
      icon: "/icons/gemini-color.svg"
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
    }
  ];

  return (
    <section className="relative py-2 bg-[#050505] overflow-hidden">

      {/* GRID BACKGROUND */}

      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),
        linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
        bg-[size:40px_40px]
        opacity-20
        "
      />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col ">

        {/* USERS */}

        <div className="flex items-center gap-4 mb-16">

          <div className="flex -space-x-2">

            <Image
              src="/users/u1.svg"
              width={36}
              height={36}
              alt="user"
              className="rounded-full border border-[#1f2937]"
            />

            {/* <Image
              src="/users/u2.avif"
              width={36}
              height={36}
              alt="user"
              className="rounded-full border border-[#1f2937]"
            /> */}

            <Image
              src="/users/u3.svg"
              width={36}
              height={36}
              alt="user"
              className="rounded-full border border-[#1f2937]"
            />

            <Image
              src="/users/u4.svg"
              width={36}
              height={36}
              alt="user"
              className="rounded-full border border-[#1f2937]"
            />

          </div>

          <div className="text-sm text-slate-400">

            <span className="text-white font-semibold">
              100+ Developers
            </span>

            <br />

            use SWE Agent

          </div>

        </div>

        {/* TITLE */}

        <p className="text-xs text-center tracking-[0.25em] text-slate-500 mb-4">
          POWERING THE FUTURE
        </p>

        <p className="text-slate-400 mb-16 text-center">
          SWE Agent integrates with leading AI platforms
        </p>

        {/* TECH ICONS */}

        <div className="flex justify-center gap-20">

          {tech.map((item) => (

            <div
              key={item.id}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >

              {/* ICON BOX */}

              <div
                className="
                w-20 h-20
                flex items-center justify-center
                rounded-xl
                border border-[#1f2937]
                transition
                duration-300
                group-hover:scale-110
                group-hover:border-green-500
                group-hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]
                "
              >

                <Image
                  src={item.icon}
                  width={36}
                  height={36}
                  alt={item.name}
                  className={
                    item.id === "gemini-color"
      ? "opacity-100 group-hover:scale-110 transition"
      : "invert opacity-90 group-hover:opacity-100"
                  }
                />

              </div>

              {/* NAME */}

              <span
                className="
                text-sm tracking-wide
                text-slate-400
                transition
                group-hover:text-green-400
                "
              >
                {item.name}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}