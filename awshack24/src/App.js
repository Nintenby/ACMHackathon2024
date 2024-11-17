import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        Emergency Vehicle Alert
      </header>
      <div className="content">
        <p className="description"> Never be caught unaware on the road with Emergency
          Vehicle Alert (EVA), the early warning system for when an 
          emergency vehicle is coming your way. Know to move before 
          you even hear sirens with an alert to your phone by EVA. Swerving and stress
          are now a thing of the past, rejoice in the future with EVA.
        </p>
        <form >
        <label className="textBox">
           <input name="url" defaultValue="Insert image url here"/>
        </label>
          <button className="button" type="submit" >Ambulance?</button>
        </form>
      </div>
    </div>
  );
}

export default App;


