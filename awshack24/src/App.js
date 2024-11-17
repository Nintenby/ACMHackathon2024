import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        Emergency Vehicle Alert
      </header>
      <div className="content">
      <img src = {logo} className = "logoimg" alt = "logo"></img>
      <img src = {mapimg} className = "mapimg" alt = "map"></img>
        <p className="description"> Never be caught unaware on the road with Emergency
          Vehicle Alert (EVA), the early warning system for when an 
          emergency vehicle is coming your way. Know to move before 
          you even hear the sirens with an alert to your phone by EVA, 
          goodbye to the days of last minute swerving and nerves on the 
          road.
        </p>
        <button className="button" type="button">Ambulance?</button>
      </div>
    </div>
  );
}

export default App;
