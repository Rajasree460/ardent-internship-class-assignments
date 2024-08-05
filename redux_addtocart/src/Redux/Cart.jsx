
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/actions';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <span>{item.name}</span>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
