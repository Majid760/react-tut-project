import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors.js';
import CheckoutItem from '../../components/checkout-item/Checkout-item.component'
import StripeButton from '../../components/stripe-button/Stripe-Button.component'

import './CheckOut.style.scss';

const CheckOutPage=({cartItems,total})=>{
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="checkout-block">
                    <span>Product</span>
                </div>
                <div className="checkout-block">
                    <span>Description</span>
                </div>
                <div className="checkout-block">
                    <span>Quantity</span>
                </div>
                <div className="checkout-block">
                    <span>Price</span>
                </div>
                <div className="checkout-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item=>{
                    return <CheckoutItem key={item.id} cartItem={item} />
                })
            }
            <div className="total">
                <span>
                    TOTAL: ${total}
                </span>
                <StripeButton total={total} />
            </div>

            
            
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})


export default connect(mapStateToProps)(CheckOutPage);