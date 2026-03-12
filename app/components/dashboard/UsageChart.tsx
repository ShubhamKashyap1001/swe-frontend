"use client"

import {LineChart,Line,XAxis,YAxis,Tooltip} from "recharts"

const data=[
 {day:"Mon",req:400},
 {day:"Tue",req:700},
 {day:"Wed",req:300},
 {day:"Thu",req:900},
]

export default function UsageChart(){

 return(

 <div className="card p-6 mt-8">

 <h3 className="mb-4">API Usage</h3>

 <LineChart width={500} height={250} data={data}>
 <XAxis dataKey="day"/>
 <YAxis/>
 <Tooltip/>
 <Line type="monotone" dataKey="req" stroke="#00c853"/>
 </LineChart>

 </div>
 )
}