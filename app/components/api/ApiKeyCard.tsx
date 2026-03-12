"use client"

export default function ApiKeyCard({data,reload}:any){

const deleteKey = async () => {

await fetch(
`http://localhost:5000/api/apis/${data.id}`,
{ method:"DELETE" }
)

reload()

}

return(

<div className="card p-6 border border-[#1f2937] rounded-lg">

<div className="flex justify-between items-center">

<h3>{data.providerName}</h3>

</div>

<p className="text-gray-400 mt-4">
{data.apiKey}
</p>

<button
onClick={deleteKey}
className="mt-4 text-red-400"
>
Delete
</button>

</div>

)
}