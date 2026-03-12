"use client"

import {useState,useEffect} from "react"

export default function CommandPalette(){

 const[open,setOpen]=useState(false)

 useEffect(()=>{

 const down=(e:any)=>{
 if((e.metaKey||e.ctrlKey)&&e.key==="k"){
 e.preventDefault()
 setOpen(o=>!o)
 }
 }

 window.addEventListener("keydown",down)
 return()=>window.removeEventListener("keydown",down)

 },[])

 if(!open)return null

 return(

 <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

 <div className="card p-6 w-96">

 <input
 placeholder="Search command..."
 className="w-full bg-transparent outline-none"/>

 </div>

 </div>

 )
}