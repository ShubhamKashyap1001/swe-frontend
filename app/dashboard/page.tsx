"use client"

import { useApiStore } from "../lib/store"
import ApiKeyCard from "../components/api/ApiKeyCard"
import AddApiKey from "../components/api/AddApiKey"

export default function DashboardPage() {
  const apiKeys = useApiStore((s) => s.apiKeys)

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        API Key Management
      </h2>

      <AddApiKey />

      <div className="grid grid-cols-3 gap-6">
        {apiKeys.map((key) => (
          <ApiKeyCard key={key.id} data={key} />
        ))}
      </div>
    </div>
  )
}