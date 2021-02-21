import CartActionTypes from './cart.types.js';

export const toggleCart=()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN,
})


export const addItem=(item)=>({
    type:CartActionTypes.ADD_CART_ITEM,
    payload:item
})

export const removeItem=(item)=>({
    type:CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload:item

})

export const removeQuantity=(item)=>({
    type:CartActionTypes.REMOVE_QUANTITY,
    payload:item
})

