"use client"

interface MetricsProps {
  stats: {
    requests: number
    activeKeys: number
    errors: number
    latency: number
  }
}

export default function MetricsCards({ stats }: MetricsProps) {

  return (

    <div className="grid grid-cols-4 gap-6">

      <div className="card p-6 border border-[#1f2937] rounded-lg">
        <p className="text-gray-400">
          Requests Today
        </p>
        <h2 className="text-2xl mt-2">
          {stats.requests}
        </h2>
      </div>

      <div className="card p-6 border border-[#1f2937] rounded-lg">
        <p className="text-gray-400">
          Active Keys
        </p>
        <h2 className="text-2xl mt-2">
          {stats.activeKeys}
        </h2>
      </div>

      <div className="card p-6 border border-[#1f2937] rounded-lg">
        <p className="text-gray-400">
          Errors
        </p>
        <h2 className="text-2xl mt-2">
          {stats.errors}%
        </h2>
      </div>

      <div className="card p-6 border border-[#1f2937] rounded-lg">
        <p className="text-gray-400">
          Latency
        </p>
        <h2 className="text-2xl mt-2">
          {stats.latency} ms
        </h2>
      </div>

    </div>

  )
}