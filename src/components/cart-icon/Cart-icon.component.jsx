import React from 'react';
import cartlogo from '../../asset/cart.svg';
import './Cart-icon.style.scss';
import {connect} from 'react-redux';
import {toggleCart} from '../../redux/cart/cart.action.js';



const CartIcon=({toggleCart})=>{
    return(
        <div className="cart-icon" onClick={toggleCart}>
            <cartlogo/>
            <i  className="shopping-icon fab fa-opencart mr-3 text-center text-success mt-1 fa-2x"> 
             </i>
            <span className="item-count"></span>
        </div>
    )
}


const mapDispatchToProps=(dispatch)=>({
    toggleCart: ()=>dispatch(toggleCart()),
});

export default connect(null,mapDispatchToProps)(CartIcon);
