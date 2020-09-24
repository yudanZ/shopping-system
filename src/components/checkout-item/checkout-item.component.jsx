import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem ,removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img alt='item' src={cartItem.imageUrl}/>
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{cartItem.quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{cartItem.price}</span>
        <div className= 'remove-button' onClick={()=> clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = dispatch => {
    return{
        clearItemFromCart: item => dispatch(clearItemFromCart(item)),
        addItem: item  => dispatch( addItem(item)),
        removeItem: item => dispatch( removeItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);