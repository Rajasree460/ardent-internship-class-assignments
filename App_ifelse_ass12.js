import React from 'react';
//import './App.css';
//import Gatepass from './components/Gatepass';

let n = 20;
let print = ""
let cssStyle = {}



if(n % 2 === 0){
    print = "Number is even"
    cssStyle.color = 'green'
}
else {
  print = 'Number is odd'
  cssStyle.color = 'red'
}



function App() {
  return (
    <div className="App">
        <h1 style={cssStyle}>{print}</h1>
    </div>
  );
}




export default App;


