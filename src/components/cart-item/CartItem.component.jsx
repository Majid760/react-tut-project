import React from 'react';
import './CartItem.style.scss';

const CartItem=({item:{imageUrl,price,name,quantity}})=>{
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="cart-item"/>
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </div>


    )
}


export default CartItem;