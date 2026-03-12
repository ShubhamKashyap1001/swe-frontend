"use client"

import { ApiKeyType, useApiStore } from "../../lib/store"
import { Trash2 } from "lucide-react"

export default function ApiKeyCard({ data }: { data: ApiKeyType }) {
  const deleteKey = useApiStore((s) => s.deleteKey)
  const toggleKey = useApiStore((s) => s.toggleKey)

  return (
    <div className="card p-6 hover:border-green-500 transition">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{data.name}</h3>

        <span
          className={`w-3 h-3 rounded-full ${
            data.active ? "green-dot" : "yellow-dot"
          }`}
        />
      </div>

      <p className="text-gray-400 mt-4 text-sm">
        {data.key}
      </p>

      <div className="flex justify-between mt-6 text-sm">
        <button
          onClick={() => toggleKey(data.id)}
          className="text-green-400 hover:text-green-300"
        >
          Toggle Status
        </button>

        <button
          onClick={() => deleteKey(data.id)}
          className="text-red-400 hover:text-red-300 flex items-center gap-2"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  )
}