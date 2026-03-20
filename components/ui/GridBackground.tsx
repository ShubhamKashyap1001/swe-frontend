// "use client";

// export default function GridBackground({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden bg-[#050505]">

//       {/* glow gradient */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#16a34a33,transparent_60%)]" />

//       {/* grid */}
//       <div
//         className="
//         absolute inset-0
//         bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
//         bg-[size:40px_40px]
//         opacity-20
//       "
//       />

//       {/* content */}
//       <div className="relative z-10">
//         {children}
//       </div>

//     </div>
//   );
// }

"use client"

import { useEffect, useState } from "react"

export default function GridBackground({
  children
}: {
  children: React.ReactNode
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative w-full bg-[#050505] overflow-hidden">

      {/* GRID */}

      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
        bg-[size:36px_36px]
        opacity-[0.25]
        "
      />

      {/* CENTER GLOW */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)]
        pointer-events-none
        "
      />

      {/* MOUSE SPOTLIGHT */}

      <div
        className="pointer-events-none absolute inset-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(34,197,94,0.15), transparent 80%)`
        }}
      />

      {/* VIGNETTE */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(ellipse_at_center,transparent_40%,#050505_80%)]
        pointer-events-none
        "
      />

      <div className="relative z-10">{children}</div>

    </div>
  )
}