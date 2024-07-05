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
      <h2>Hello I am Rajasree</h2>
   </div>
  )
  
}


function Third() {
  return (
    <div>
      <h3>Hello I am CSE student</h3>
   </div>
  )
  
}



function Fourth() {
  return (
    <div>
      <h4>Hello I am student of AU</h4>
   </div>
  )
  
}


function Fifth() {
  return (
    <div>
      <h5>Hello</h5>
   </div>
  )
  
}

export default App;
