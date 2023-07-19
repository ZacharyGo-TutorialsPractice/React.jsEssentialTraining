import './App.css';

const [firstCity,second] = ["Tokyo", "Tahoe City", "Bend"];


function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
      <h2>{firstCity}</h2>
      <h3>{second}</h3>
    </div>
  );
}

export default App;
