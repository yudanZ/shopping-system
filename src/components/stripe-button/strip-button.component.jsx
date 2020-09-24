import React from 'react'

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStrip = price * 1000;
    const publishableKey = 'pk_test_51HUz0ZJmqIh96AN6Q8Cfd066sl3xgoDtx49j7Gpz8NpP3pJoF7XcMSXQ5y6BI6zcZxuG9FlIe7RTWG6tBUrwkol000FHqPVFYm';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
            label='Pay now'
            name='Yudan Shopping Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is CHF ${price}`}
            amount={priceForStrip}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
         
           
        />
    )
} 

export default StripeButton