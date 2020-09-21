import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


const CartIcon = ({toggleCartHidden, count }) => (
    <div className= 'cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{count}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch( toggleCartHidden())
})

const mapStateToProps = ( state ) => {
    
    return {
        count: selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);