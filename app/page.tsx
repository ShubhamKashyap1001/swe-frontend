import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold mb-6">
        SWE Agent API Platform
      </h1>

      <p className="text-gray-400 max-w-xl mb-8">
        Securely manage and monitor all your API keys in one
        modern developer dashboard.
      </p>

      <Link
        href="/dashboard"
        className="px-6 py-3 bg-[#00c853] text-black rounded-xl font-semibold hover:opacity-90 transition"
      >
        Go to Dashboard
      </Link>
    </div>
  )
}