import './App.css';
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>Name:{name}</h1>
      <p>Location:{location}</p>
      <img src={avatar} />
    </div>
  );
}
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/ZacharyGo-TutorialsPractice'
    ).then((Response) => Response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  if (loading) return <h1>Loading....</h1>;
  if (error) return <pre>{JSON.stringify(error)} Error</pre>
  if (!data) return null;
  return (
    <GithubUser name={data.name}
      location={data.type}
      avatar={data.avatar_url} />
  );
  return <h1>Data</h1>
}

export default App;
