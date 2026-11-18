"use client"

import { useEffect, useState } from "react"
import MetricsCards from "../components/dashboard/MetricsCards"
import UsageChart from "../components/dashboard/UsageChart"

export default function Dashboard(){

const [stats,setStats] = useState<any>(null)

useEffect(()=>{

fetch("http://localhost:5000/api/dashboard/stats?guestId=guest1")
.then(res=>res.json())
.then(data=>setStats(data))

},[])

if(!stats) return <p className="text-gray-400">Loading dashboard...</p>

return(

<div>

<MetricsCards stats={stats}/>

<UsageChart/>

</div>

)
}