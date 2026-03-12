"use client";

import Link from "next/link";
import { LayoutDashboard, Key, FileText, Bug } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#0e131a] border-r border-[#1f2937] p-6">
      <h1 className="text-xl font-bold text-green-400 mb-10">SWE Agent</h1>

      <nav className="space-y-4">
        <Link href="/dashboard" className="flex gap-2 items-center">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link href="/dashboard/apikeys" className="flex gap-2 items-center">
          <Key size={18} />
          API Keys
        </Link>

        <Link href="/dashboard/issues" className="flex gap-2 items-center">
          <Bug size={18} />
          Issues
        </Link>

        <Link href="/dashboard/logs" className="flex gap-2 items-center">
          <FileText size={18} />
          Logs
        </Link>
      </nav>
    </div>
  );
}