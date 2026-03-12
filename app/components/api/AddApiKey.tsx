"use client"

import { useState } from "react"

export default function AddApiKey({reload}:any){

const [provider,setProvider] = useState("")
const [apiKey,setApiKey] = useState("")

const handleAdd = async () => {

await fetch("http://localhost:5000/api/apis",{

method:"POST",
headers:{ "Content-Type":"application/json" },

body:JSON.stringify({
providerName:provider,
apiKey:apiKey,
iv:"randomiv",
guestId:"guest1"
})

})

reload()

}

return(

<div className="flex gap-4 mb-6">

<input
placeholder="Provider Name"
value={provider}
onChange={e=>setProvider(e.target.value)}
className="bg-[#11161c] px-4 py-2 rounded"
/>

<input
placeholder="API Key"
value={apiKey}
onChange={e=>setApiKey(e.target.value)}
className="bg-[#11161c] px-4 py-2 rounded"
/>

<button
onClick={handleAdd}
className="px-4 py-2 bg-green-500 text-black rounded"
>
Add Key
</button>

</div>

)
}