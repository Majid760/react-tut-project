import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeButton=({total})=>{
    console.log(total);
    const priceForStripe = total*100;
    const publishKey = 'pk_live_51Ft0SBC31Yyn3JVOTVTq5aq5xKvEbxna3XqgbbeI7llz1wYSnRVr8ELc48GtVNYp9VBbUmHx557KLFBcHYfeqoYl00Nn0jEbdL';
    
   const onToke = token => {
        alert('Payment handle successfully!');
    }
    return (
            <>
            <div className="mt-3">
                    <StripeCheckout 
                    label="Pay Now"
                    shippingAddress
                    billingAddress
                    image="https://svgshare.com/i/CUz.svg"
                    description={`total amout: $${total}`}
                    amount={priceForStripe}
                    panelLabel="Pay Now"
                    token={onToke}
                    stripeKey={publishKey}
                    />
                </div>
            </>
        )
}



export default StripeButton;