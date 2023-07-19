import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion])
  return (
    <div className="App">
      <h1>Current emotion {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>
    </div>
  );
}

export default App;
