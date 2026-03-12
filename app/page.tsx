"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {

const [showVideo,setShowVideo] = useState(false)
const [showLogin,setShowLogin] = useState(false)
const [activeSlide,setActiveSlide] = useState(0)

const slides = [
{
title:"What is SWE Agent?",
description:"SWE Agent is an AI powered developer platform that helps engineers automate workflows, manage API keys and monitor services in real time."
},
{
title:"Why SWE Agent?",
description:"Modern engineering teams require automation. SWE Agent reduces operational complexity and allows developers to focus on building products."
},
{
title:"How SWE Agent helps teams",
description:"Teams can manage API keys, monitor requests, automate workflows and integrate AI powered tooling directly into their development lifecycle."
}
]

useEffect(()=>{
const interval=setInterval(()=>{
setActiveSlide(prev => (prev + 1) % slides.length)
},8000)

return ()=>clearInterval(interval)

},[])

return (

<div className="min-h-screen bg-[#050505] text-white flex flex-col">

{/* NAVBAR */}

<nav className="w-full border-b border-[#1f2937] bg-[#050505]">

<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<h1 className="text-xl font-bold text-green-500">
SWE Agent
</h1>

<div className="flex gap-4">

<button className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-500 transition">
Download
</button>

<button
onClick={()=>setShowLogin(true)}
className="px-4 py-2 border border-green-600 rounded-lg hover:bg-green-600 transition"
>
Login
</button>

</div>

</div>

</nav>

<main className="flex-1 flex flex-col">

{/* HERO */}

<section className="max-w-[1100px] mx-auto px-6 pt-28 pb-24">

<h1 className="text-5xl md:text-8xl font-bold leading-[0.95] mb-8">

AI powered <br/> developer platform

</h1>

<p className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-10">

SWE Agent helps engineering teams manage APIs,
automate development workflows and monitor systems
with a powerful modern dashboard.

</p>

<div className="flex flex-wrap gap-6">

<Link
href="/dashboard"
className="px-6 py-3 bg-green-600 text-black rounded-lg font-semibold hover:bg-green-500 transition"
>
Open Dashboard
</Link>

<button
onClick={()=>setShowVideo(true)}
className="border-b border-green-500 text-green-400 opacity-80 hover:opacity-100"
>
Watch Setup Demo
</button>

</div>

</section>

{/* VIDEO */}

{showVideo && (

<section className="max-w-[900px] mx-auto px-6 pb-20">

<div className="rounded-xl border border-[#1f2937] overflow-hidden">

<video className="w-full" controls>
<source src="/videos/setup.mp4" type="video/mp4"/>
</video>

</div>

</section>

)}

{/* ABOUT SLIDER */}

<section className="py-20 bg-[#060606]">

<div className="max-w-[1000px] mx-auto px-6">

<h2 className="text-3xl md:text-4xl font-bold mb-10">
About SWE Agent
</h2>

<AnimatePresence mode="wait">

<motion.div
key={activeSlide}
initial={{opacity:0,x:120}}
animate={{opacity:1,x:0}}
exit={{opacity:0,x:-120}}
transition={{duration:0.8}}
className="rounded-2xl border border-[#1f2937] bg-[#0c0c0c] p-10"
>

<h3 className="text-2xl font-semibold mb-4">
{slides[activeSlide].title}
</h3>

<p className="text-lg text-slate-400">
{slides[activeSlide].description}
</p>

</motion.div>

</AnimatePresence>

<div className="flex justify-center gap-2 mt-6">

{slides.map((_,i)=>(
<button
key={i}
onClick={()=>setActiveSlide(i)}
className={`w-3 h-3 rounded-full ${
activeSlide === i ? "bg-green-500" : "bg-slate-600"
}`}
/>
))}

</div>

</div>

</section>

{/* CODE PREVIEW */}

<section className="py-16 bg-[#080808]">

<div className="max-w-[1000px] mx-auto px-6">

<div className="rounded-2xl border border-[#1f2937] overflow-hidden bg-[#0c0c0c]">

<div className="px-6 py-4 border-b border-[#1f2937] flex items-center justify-between">

<div className="flex gap-2">
<div className="w-3 h-3 bg-red-500 rounded-full"/>
<div className="w-3 h-3 bg-yellow-400 rounded-full"/>
<div className="w-3 h-3 bg-green-500 rounded-full"/>
</div>

<span className="text-xs text-slate-400 tracking-wider">
SWE_AGENT/API.TS
</span>

</div>

<div className="p-10 font-mono text-[15px] leading-relaxed">

<div className="text-slate-400 mb-6">
{"const result = await sweAgent.run({"}
</div>

<div className="rounded-xl border border-[#1f2937] bg-black/40 p-6 mb-6">

<div className="flex items-center gap-3 mb-3">

<Terminal size={16}/>
<span className="font-bold">SWE Agent</span>

</div>

<p className="text-lg">
Analyzing API requests and generating optimized workflow...
</p>

</div>

<div className="text-slate-400">
{"return result.data"}
</div>

</div>

</div>

</div>

</section>

</main>

{/* LOGIN MODAL */}

{showLogin && (

<div className="fixed inset-0 bg-black/70 flex items-center justify-center">

<div className="bg-[#0c0c0c] border border-[#1f2937] rounded-xl p-8 w-[350px]">

<h2 className="text-xl font-semibold mb-6 text-green-500">
Login to SWE Agent
</h2>

<div className="flex flex-col gap-4">

<Link
href="/dashboard"
className="px-4 py-3 bg-green-600 text-black rounded-lg text-center font-semibold hover:bg-green-500"
>
Continue as Guest
</Link>

<button className="px-4 py-3 border border-green-600 rounded-lg hover:bg-green-600">
Login with GitHub
</button>

</div>

<button
onClick={()=>setShowLogin(false)}
className="mt-6 text-sm text-gray-400 hover:text-white"
>
Close
</button>

</div>

</div>

)}

{/* FOOTER */}

<footer className="border-t border-[#1f2937] py-12 text-slate-400">

<div className="max-w-[1000px] mx-auto px-6">

<h3 className="font-bold text-xl mb-2">
SWE Agent
</h3>

<p className="max-w-lg text-sm opacity-80">
AI powered developer platform for managing APIs,
automating workflows and building intelligent
engineering tools.
</p>

<p className="mt-6 text-xs opacity-70">
© 2026 SWE Agent
</p>

</div>

</footer>

</div>

)
}