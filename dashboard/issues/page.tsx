"use client"

import { useEffect, useState } from "react"

export default function IssuesPage(){

const [issues,setIssues] = useState([])
const [loading,setLoading] = useState(true)

const loadIssues = async () => {

const res = await fetch(
"http://localhost:5000/api/jobs?guestId=guest1"
)

const data = await res.json()

setIssues(data)
setLoading(false)

}

useEffect(()=>{
loadIssues()
},[])

if(loading){
return <p className="text-gray-400">Loading issues...</p>
}

if(issues.length === 0){
return(

<div className="text-center mt-20 text-gray-400">

<h2 className="text-xl mb-2">
No Issues Found
</h2>

<p>
Issues raised in repositories will appear here.
</p>

</div>

)
}

return(

<div>

<h2 className="text-2xl mb-6">
Repository Issues
</h2>

<div className="space-y-4">

{issues.map((issue:any)=>{

const statusColor =
issue.status === "COMPLETED"
? "bg-green-500"
: "bg-yellow-400"

return(

<div
key={issue.id}
className="border border-[#1f2937] p-6 rounded-lg flex justify-between items-center"
>

<div>

<p className="font-semibold">
Repo: {issue.repoUrl}
</p>

<p className="text-gray-400 text-sm mt-1">
Issue #{issue.issueNumber}
</p>

</div>

<div className="flex items-center gap-4">

<span
className={`px-3 py-1 rounded text-sm ${statusColor}`}
>

{issue.status}

</span>

<a
href={`${issue.repoUrl}/issues/${issue.issueNumber}`}
target="_blank"
className="text-green-400"
>

Open

</a>

</div>

</div>

)

})}

</div>

</div>

)
}