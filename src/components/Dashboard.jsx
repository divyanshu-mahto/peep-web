import {useState, useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

async function fetchAllRules() {
  const res = await fetch('/all-rules', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    } 
  });

  if (!res.ok) {
    if (res.status === 401) {
      throw new Error('Not authenticated');
    }
    throw new Error(`Server error (${res.status})`);
  }
  return res.json();
}

const Dashboard = () => {

  const [rules, setRules]   = useState([]);
  const [error, setError]   = useState(null);

  useEffect(() => {
    fetchAllRules()
      .then(data => setRules(data))
      .catch(err => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  if (error)   return <p>Error: {error}</p>;
  if (!rules.length) return <p>Loading rules…</p>;
  console.log(rules);

  return (
    <ul>
      {rules.map(r => (
        <li key={r.getRuleId()}>{r.getRuleText()}</li>
      ))}
    </ul>
  );
}

export default Dashboard