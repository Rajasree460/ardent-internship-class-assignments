import React from 'react';
//import './App.css';
//import Gatepass from './components/Gatepass';

let n = 2;
let print = ""
let cssStyle = {}


if(n === 10){
  print = "Number Is Equals To 10"
  cssStyle.color = 'green'
}else if(n >= 10){
  print = "Number Is Greater Than 10";
  cssStyle.color = 'red'
}else{
  print = "Number Is Less Than 10"
  cssStyle.color = 'blue'
}


function App() {
  return (
    <div className="App">
        <h1 style={cssStyle}>{print}</h1>
    </div>
  );
}




export default App;
