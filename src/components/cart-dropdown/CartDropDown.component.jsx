import React from 'react';
import './cart-dropdown.style.scss';
import Button from '../utilities/custom-button/CustomButton.component';
import {connect} from 'react-redux';
import CartItem from '../cart-item/CartItem.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {toggleCart} from '../../redux/cart/cart.action.js';
const CartDropDown=({cartItems, history,dispatch})=>{

    const handleCheckout=(e)=>{
        
        e.preventDefault();
        dispatch(toggleCart());
        history.push('/checkout');

    }
    return(
        
        <div className="cart-dropdown">
            
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map((item)=>(
                        <CartItem key={item.id.toString()} item={item} />
                    ))
                    :
                    <span className="empty-message">Your cart is empty!</span> 
                }
                
            </div>
            <button className="btn btn-primary" style={{position:"absolute",top:"250px"}} onClick={handleCheckout}>Checkout</button>
        </div>

    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropDown));