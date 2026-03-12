const API = process.env.NEXT_PUBLIC_API_URL

export async function getApis(userId?:number,guestId?:string){

 const res = await fetch(
  `${API}/apis?userId=${userId ?? ""}&guestId=${guestId ?? ""}`
 )

 return res.json()
}

export async function createApi(data:any){

 const res = await fetch(`${API}/apis`,{
  method:"POST",
  headers:{ "Content-Type":"application/json" },
  body:JSON.stringify(data)
 })

 return res.json()
}

export async function deleteApi(id:number){

 await fetch(`${API}/apis/${id}`,{
  method:"DELETE"
 })

}

export async function getDashboardStats(userId?:number,guestId?:string){

 const res = await fetch(
  `${API}/dashboard/stats?userId=${userId ?? ""}&guestId=${guestId ?? ""}`
 )

 return res.json()
}

export async function getJobs(userId?:number,guestId?:string){

 const res = await fetch(
  `${API}/jobs?userId=${userId ?? ""}&guestId=${guestId ?? ""}`
 )

 return res.json()
}