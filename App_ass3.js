import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
    </div>
  );
}

function First() {
  return (
    <div>
      <h1>Hello World</h1>
   </div>
  )
  
}


function Second() {
  return (
    <div>
      <h2>Hello World</h2>
   </div>
  )
  
}


function Third() {
  return (
    <div>
      <h3>Hello World</h3>
   </div>
  )
  
}



function Fourth() {
  return (
    <div>
      <h4>Hello World</h4>
   </div>
  )
  
}


function Fifth() {
  return (
    <div>
      <h5>Hello World</h5>
   </div>
  )
  
}

export default App;
