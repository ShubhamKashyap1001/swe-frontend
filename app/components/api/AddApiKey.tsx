"use client"

import { useState } from "react"
import { useApiStore } from "../../lib/store"

export default function AddApiKey() {
  const [name, setName] = useState("")
  const addKey = useApiStore((s) => s.addKey)

  return (
    <div className="flex gap-4 mb-8">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter API Key Name"
        className="bg-[#11161c] border border-[#1f2937] rounded-lg px-4 py-2 w-72"
      />

      <button
        onClick={() => {
          if (!name) return
          addKey(name)
          setName("")
        }}
        className="px-5 py-2 bg-[#00c853] text-black rounded-lg font-semibold"
      >
        Add API Key
      </button>
    </div>
  )
}