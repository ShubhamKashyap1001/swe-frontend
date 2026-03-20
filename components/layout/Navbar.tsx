export default function Navbar(){

 return(

 <div className="h-16 border-b border-[#1f2937] flex justify-between items-center px-8">

 <div className="text-gray-400">
 SWE Agent Dashboard
 </div>

 <div className="flex gap-4">

 <button className="px-4 py-2 bg-[#1f2937] rounded-lg">
 Download
 </button>

 <button className="px-4 py-2 bg-green-500 text-black rounded-lg">
 GitHub Login
 </button>

 </div>

 </div>
 )
}