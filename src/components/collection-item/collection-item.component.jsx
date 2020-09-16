import React from 'react';


import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className='card collection-item'>
        <img className='card-img-top' src={imageUrl} alt={name}></img>
        
        <div className='card-body collection-footer'>
            <p className='card-text name'>{name}</p>
            <p className='card-text price'>{`CHF  ${price}`}</p>
        </div>
    </div>

)

export default CollectionItem;