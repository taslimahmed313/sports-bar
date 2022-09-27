import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
      <div className="cart">
        <h1>Player List........</h1>
        <div className='cart-style'>
          {cart.map((c) => (
            <li>{c.strFormat}</li>
          ))}
        </div>
      </div>
    );
};

export default Cart;