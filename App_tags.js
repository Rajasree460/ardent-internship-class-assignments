import React from 'react';
//import './App.css';


const img="myimg.jpeg";

function App() {
  return (
    <div className="App">
    <h1>heading tag</h1>

     <p>paragraph tag</p>

     <span>
     span <span>tag</span>
     </span>

     <ol>
     <li>list tag</li>
     </ol>

     <ol type="a">
     <li>list tag</li>
     </ol>

     <ul>
     <li>list tag</li>
     </ul>

     <ul type="square">
     <li>list tag</li>
     </ul>

    <img src={img} alt={img} width={'200px'} height={'200px'} />
    </div>
  );
}


export default App;

