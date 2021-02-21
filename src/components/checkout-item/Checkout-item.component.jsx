import React from 'react';
import './checkout-item.style.scss';
import {removeItem,removeQuantity,addItem} from '../../redux/cart/cart.action.js';
import {connect} from 'react-redux';

const CheckoutItem=({cartItem,removeItem,removeQuantity,addItem})=> {
    const {name,imageUrl,price,quantity}=cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={(()=>removeQuantity(cartItem))}>
                    &#10094;  
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={(()=>addItem(cartItem))}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>removeItem(cartItem)}>&#10005;</div>
        </div>

    )
}


const mapDispatchToProps = dispatch=>({
    removeItem:item=>dispatch(removeItem(item)),
    removeQuantity:item=>dispatch(removeQuantity(item)),
    addItem:item=>dispatch(addItem(item)),
})

export default connect(null,mapDispatchToProps)(CheckoutItem);