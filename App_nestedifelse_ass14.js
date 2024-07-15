import React from 'react';
//import './App.css';
//import Gatepass from './components/Gatepass';

let n = 1;
let print = ""


if(n === 1){
  print = "Number Is : "+n;
}else if(n ===2){
  let a=20;
  let b=10;
  let sub=a-b;
  print = "Sub Is : "+sub;
}else if(n ===3){
  let a=20;
  let b=10;
  let mul=a*b;
  print = "Mul Is : "+mul;
}else if(n ===4){
  let a=20;
  let b=10;
  let div=a/b;
  print = "Div Is : "+div;
}else if(n ===5){
  let a=20;
  if(a < 0){
     print ="Neg no.";
  }else{
   print = "pos no."
  }
}else if(n ===6){
  print = "Wrong input";
}


function App() {
  return (
    <div className="App">
        <h1>{print}</h1>
    </div>
  );
}




export default App;
