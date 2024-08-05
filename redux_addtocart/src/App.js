// App.js
import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './Redux/actions';
import Cart from './Redux/Cart'; 

function App() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const sampleItem = {
        id: 1,
        name: 'Sample Item'
    };

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
                    <button className="add-to-cart" onClick={() => dispatch(addToCart(sampleItem))}>Add to Cart</button>
                    <button className="counter-button removeFromCart" onClick={() => dispatch(removeFromCart(sampleItem.id))}>Remove From Cart</button>
                </div>
            </div>
            <Cart />
        </div>
    );
}

export default App;
