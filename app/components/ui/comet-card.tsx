"use client"

import { ReactNode } from "react"

export function CometCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="
      group
      relative
      transition
      duration-500
      hover:scale-[1.02]
      "
    >

      {/* glow */}

      <div
        className="
        absolute
        -inset-1
        rounded-xl
        bg-gradient-to-r
        from-green-500
        via-emerald-400
        to-green-500
        opacity-0
        blur-lg
        transition
        duration-500
        group-hover:opacity-40
        "
      />

      <div className="relative">{children}</div>

    </div>
  )
}