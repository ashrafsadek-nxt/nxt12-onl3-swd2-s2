import { useState, useEffect } from 'react';
export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);
  if (loading) return <h2>Loading...</h2>;
  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
