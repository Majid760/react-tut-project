import React from 'react';
import './Collection.item.style.scss';
import Button from '../utilities/custom-button/CustomButton.component';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action.js';
const CollectionItem=({item,addItem})=>{
    const {name,price,imageUrl}=item;
    return(
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <button className="btn btn-black" onClick={()=>addItem(item)}>Add to Cart</button> 
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);