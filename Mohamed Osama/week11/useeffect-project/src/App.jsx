
import { useState, useEffect } from 'react';

export default function App(){
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>{
        setUsers(data);
        setLoading(false);
      })
  },[]);

  if(loading) return <h2>Loading...</h2>

  return (
    <ul>
      {users.map(u=><li key={u.id}>{u.name}</li>)}
    </ul>
  )
}
