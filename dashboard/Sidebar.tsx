"use client"

import Link from "next/link"
import { LayoutDashboard, Key } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#0e131a] border-r border-[#1f2937] p-6">
      <h1 className="text-2xl font-bold green-accent mb-10">
        SWE Agent
      </h1>

      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/dashboard"
          className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
        >
          <Key size={18} />
          API Keys
        </Link>
      </nav>
    </div>
  )
}