// "use client"

// import { useState } from "react"

// export default function AddApiKey({reload}:any){

// const [provider,setProvider] = useState("")
// const [apiKey,setApiKey] = useState("")

// const handleAdd = async () => {

// await fetch("http://localhost:5000/api/apis",{

// method:"POST",
// headers:{ "Content-Type":"application/json" },

// body:JSON.stringify({
// providerName:provider,
// apiKey:apiKey,
// iv:"randomiv",
// guestId:"guest1"
// })

// })

// reload()

// }

// return(

// <div className="flex gap-4 mb-6">

// <input
// placeholder="Provider Name"
// value={provider}
// onChange={e=>setProvider(e.target.value)}
// className="bg-[#11161c] px-4 py-2 rounded"
// />

// <input
// placeholder="API Key"
// value={apiKey}
// onChange={e=>setApiKey(e.target.value)}
// className="bg-[#11161c] px-4 py-2 rounded"
// />

// <button
// onClick={handleAdd}
// className="px-4 py-2 bg-green-500 text-black rounded"
// >
// Add Key
// </button>

// </div>

// )
// }

"use client";

import { useState } from "react";

export default function AddApiKey({ reload }: any) {

  const [open, setOpen] = useState(false);
  const [provider, setProvider] = useState("");
  const [apiKey, setApiKey] = useState("");

  const guestId = "guest1";

  const createKey = async () => {

    await fetch("http://localhost:5000/api/apis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        providerName: provider,
        apiKey,
        iv: "randomiv",
        guestId
      })
    });

    setOpen(false);
    setProvider("");
    setApiKey("");

    reload();
  };

  return (
    <div>

      <button
        onClick={() => setOpen(true)}
        className="bg-green-500 text-black px-4 py-2 rounded"
      >
        Add API Key
      </button>

      {open && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-[#0e131a] p-6 rounded-lg w-96">

            <h3 className="mb-4 text-lg">
              Create API Key
            </h3>

            <input
              placeholder="Provider"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="w-full mb-3 p-2 bg-[#1a1f27]"
            />

            <input
              placeholder="API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full mb-4 p-2 bg-[#1a1f27]"
            />

            <div className="flex gap-3">

              <button
                onClick={createKey}
                className="bg-green-500 text-black px-4 py-2 rounded"
              >
                Save
              </button>

              <button
                onClick={() => setOpen(false)}
                className="border px-4 py-2"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}