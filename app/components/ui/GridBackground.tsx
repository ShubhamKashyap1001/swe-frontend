"use client";

export default function GridBackground({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#050505]">

      {/* glow gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#16a34a33,transparent_60%)]" />

      {/* grid */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
        bg-[size:40px_40px]
        opacity-20
      "
      />

      {/* content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}