import React from 'react';
//import './App.css';
import Boots from './components/Boots';
import Prop from './components/Prop';


function App() {
  return (
    <div className="App">
        <Prop
          boots = <Boots/> //boots is a key
        />
    </div>
  );
}


export default App;
