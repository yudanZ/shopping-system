import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
    const {  name, price, imageUrl } = item;
    return(
   
    <div className='card collection-item'>
        <img className='card-img-top' src={imageUrl} alt={name}></img>
        
        <div className='card-body collection-footer'>
            <p className='card-text name'>{name}</p>
            <p className='card-text price'>{`CHF  ${price}`}</p>
        </div>
        <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>

)}
const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch( addItem (item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);