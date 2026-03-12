export default function LogsTable(){

 const logs=[
 {time:"12:41",endpoint:"/generate",status:200},
 {time:"12:42",endpoint:"/chat",status:500}
 ]

 return(

 <table className="w-full card p-6">

 <thead>
 <tr>
 <th>Time</th>
 <th>Endpoint</th>
 <th>Status</th>
 </tr>
 </thead>

 <tbody>

 {logs.map((l,i)=>(
 <tr key={i} className="text-center">

 <td>{l.time}</td>
 <td>{l.endpoint}</td>
 <td>{l.status}</td>

 </tr>
 ))}

 </tbody>

 </table>

 )
}