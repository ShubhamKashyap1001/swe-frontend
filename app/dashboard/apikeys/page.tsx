"use client"

import { useEffect, useState } from "react"
import ApiKeyCard from "../../components/api/ApiKeyCard"
import AddApiKey from "../../components/api/AddApiKey"

export default function ApiKeys() {

const [keys,setKeys] = useState([])
const [loading,setLoading] = useState(true)

const loadKeys = async () => {

const res = await fetch(
"http://localhost:5000/api/apis?guestId=guest1"
)

const data = await res.json()

setKeys(data)
setLoading(false)

}

useEffect(()=>{
loadKeys()
},[])

if(loading){
return <p className="text-gray-400">Loading your API keys...</p>
}

if(keys.length === 0){
return(

<div className="text-gray-400 text-center mt-20">

<h2 className="text-xl mb-2">
No API Keys Found
</h2>

<p>
Create your first API key to start using SWE Agent services.
</p>

</div>

)
}

return(

<div>

<h2 className="text-2xl mb-6">
API Keys
</h2>

<AddApiKey reload={loadKeys}/>

<div className="grid grid-cols-3 gap-6">

{keys.map((key:any)=>(
<ApiKeyCard key={key.id} data={key} reload={loadKeys}/>
))}

</div>

</div>

)
}