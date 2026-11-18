"use client"

import { useEffect, useState } from "react"

export default function LogsPage(){

const [logs,setLogs] = useState([])

useEffect(()=>{

fetch("http://localhost:5000/api/logs?guestId=guest1")
.then(res=>res.json())
.then(data=>setLogs(data))

},[])

return(

<div>

<h2 className="text-2xl mb-6">
Activity Logs
</h2>

<div className="space-y-4">

{logs.map((log:any)=>{

const color =
log.level === "ERROR"
? "text-red-400"
: log.level === "WARNING"
? "text-yellow-400"
: "text-green-400"

return(

<div
key={log.id}
className="border border-[#1f2937] p-4 rounded-lg flex justify-between"
>

<div>

<p className={color}>
{log.action}
</p>

<p className="text-gray-400 text-sm">
{log.message}
</p>

</div>

<span className="text-gray-500 text-sm">
{new Date(log.createdAt).toLocaleString()}
</span>

</div>

)

})}

</div>

</div>

)
}