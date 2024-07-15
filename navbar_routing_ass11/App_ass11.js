import React from 'react';
//import './App.css';
//import Gatepass from './components/Gatepass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Add from './components/Add';
import Reg from './components/Reg';
import Contactus from './components/Contactus';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Menu />}></Route>
            <Route exact path='/About' element={<About />}></Route>
            <Route exact path='/Gallery' element={<Gallery />}></Route>
            <Route exact path='/Add' element={<Add />}></Route>
            <Route exact path='/Reg' element={<Reg />}></Route>
            <Route exact path='/Contactus' element={<Contactus />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}




export default App;


