import './App.css';
import React, { useState} from 'react';
 
function App() {
  const [result, setResult] = useState("");

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    console.log("hello please log");
  
    // Read the form data
    const form = e.target;
    const urly = new FormData(form).get("url");
  
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
  
    fetch(`http://172.31.30.58:3000/url?url=${urly}`, requestOptions) 
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setResult(data["prediction"]); // Update the result state correctly
    })
    .catch((error) => console.error(error));
  };

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
        <form method="post" onSubmit={handleSubmit}>
        <label className="textBox">
           <input name="url" defaultValue="Insert image url here"/>
        </label>
          <button className="button" type="submit" >Ambulance?</button>
        </form>
        <p className="resultTime">{result}</p>
      </div>
    </div>
  );
}

export default App;


