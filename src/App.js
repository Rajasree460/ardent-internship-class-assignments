import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/actions';


function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();


  return (
    <div className="App">
          <div className="counter-container">
                <input
                    type="text"
                    className="counter-input"
                    value={count}
                    readOnly
                />
                <div className="buttons-container">
                    <button className="counter-button increment" onClick={() => dispatch(increment())}>Increment</button>
                    <button className="counter-button decrement" onClick={() => dispatch(decrement())}>Decrement</button>
                </div>
            </div>
    </div>
  );
}


export default App;
