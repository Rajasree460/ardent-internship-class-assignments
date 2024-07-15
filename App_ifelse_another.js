import React from 'react';
//import './App.css';
//import Gatepass from './components/Gatepass';

let str = 'sunday';
let print = "";
let imgelement=null;
const img1 = '/img/sun.jpg';
const img2 = '/img/ofc.jpg';


if (str === 'sunday') {
  print = "Today is holiday so I will go to watch a movie";
  imgelement=<img src={img1} alt="img1" />
} else {
  print = 'Today is office';
  imgelement=<img src={img2} alt="img2" />
}

function App() {
  return (
    <div className="App">
      <h1>{print}</h1>
      {imgelement}
    </div>
  );
}

export default App;
