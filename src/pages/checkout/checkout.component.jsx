import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem  from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/strip-button.component';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems , totalPrice}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block header-block-description'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
               <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
                
            )
        }

        <div className='total'>
            <span>TOTAL : CHF {totalPrice}</span>
        </div>
        <div className="test-warning">
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 -Exp: any futher day -CW 123
        </div>
        <StripeButton price={totalPrice}></StripeButton>
    </div>
) 
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    totalPrice : selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);