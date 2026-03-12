export default function Navbar() {
  return (
    <div className="h-16 border-b border-[#1f2937] flex items-center justify-between px-8">
      <div className="text-sm text-gray-400">
        Welcome back, Developer
      </div>

      <button className="px-4 py-2 bg-[#1f2937] hover:bg-[#263140] rounded-lg text-sm transition">
        Download Client
      </button>
    </div>
  )
}