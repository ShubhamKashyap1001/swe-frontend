// "use client"

// export default function ApiKeyCard({data,reload}:any){

// const deleteKey = async () => {

// await fetch(
// `http://localhost:5000/api/apis/${data.id}`,
// { method:"DELETE" }
// )

// reload()

// }

// return(

// <div className="card p-6 border border-[#1f2937] rounded-lg">

// <div className="flex justify-between items-center">

// <h3>{data.providerName}</h3>

// </div>

// <p className="text-gray-400 mt-4">
// {data.apiKey}
// </p>

// <button
// onClick={deleteKey}
// className="mt-4 text-red-400"
// >
// Delete
// </button>

// </div>

// )
// }

"use client";

import { Copy, Trash } from "lucide-react";

export default function ApiKeyCard({ data, reload }: any) {

  const masked =
    data.apiKey.slice(0, 8) +
    "********" +
    data.apiKey.slice(-4);

  const copy = () => {
    navigator.clipboard.writeText(data.apiKey);
  };

  const deleteKey = async () => {

    await fetch(
      `http://localhost:5000/api/apis/${data.id}`,
      { method: "DELETE" }
    );

    reload();
  };

  return (

    <div className="bg-[#0f1720] border border-[#1f2937] p-6 rounded-xl">

      <div className="flex items-center gap-2 mb-4">

        <span
          className={`w-3 h-3 rounded-full ${
            data.status === "ACTIVE"
              ? "bg-green-400"
              : "bg-yellow-400"
          }`}
        />

        <h3 className="font-semibold">
          {data.providerName}
        </h3>

      </div>

      <p className="font-mono text-sm mb-4 text-gray-300">
        {masked}
      </p>

      <div className="text-sm text-gray-400 mb-4">

        <p>Last Used: {data.lastUsed ?? "Never"}</p>
        <p>Rate Limit: {data.rateLimit ?? "1000 req/day"}</p>
        <p>Expires: {data.expiry ?? "N/A"}</p>

      </div>

      <div className="flex gap-3">

        <button
          onClick={copy}
          className="flex items-center gap-2 border px-3 py-1 rounded"
        >
          <Copy size={16} />
          Copy
        </button>

        <button
          onClick={deleteKey}
          className="flex items-center gap-2 border border-red-500 text-red-400 px-3 py-1 rounded"
        >
          <Trash size={16} />
          Delete
        </button>

      </div>

    </div>
  );
}