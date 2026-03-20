import {create} from "zustand"

export type ApiKey={
 id:string
 name:string
 key:string
 active:boolean
}

type Store={
 apiKeys:ApiKey[]
 addKey:(name:string)=>void
 deleteKey:(id:string)=>void
 toggle:(id:string)=>void
}

export const useStore=create<Store>((set)=>({

 apiKeys:[],

 addKey:(name)=>
 set(state=>({
  apiKeys:[
   ...state.apiKeys,
   {
    id:crypto.randomUUID(),
    name,
    key:"sk_"+Math.random().toString(36).slice(2,18),
    active:true
   }
  ]
 })),

 deleteKey:(id)=>
 set(state=>({
  apiKeys:state.apiKeys.filter(k=>k.id!==id)
 })),

 toggle:(id)=>
 set(state=>({
  apiKeys:state.apiKeys.map(k=>
   k.id===id?{...k,active:!k.active}:k
  )
 }))
}))