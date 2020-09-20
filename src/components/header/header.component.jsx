import React from 'react';
import './header.styles.scss';


import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    
    <div className="header">
        <Link className="logo-container" to="/">
            <i className="fas fa-crown" style={{ fontSize: '48px'}}></i>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>

            {   
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>

                ) : (
                <Link to='/signin' className='option'>SIGN IN</Link>
            )}

            <CartIcon></CartIcon>
        </div>
        {   hidden ? null :
            (<CartDropdown></CartDropdown>)

        }
    </div>

);

// any time the store is updated, mapStateToProps will be called
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser: currentUser,
    hidden: hidden

})

export default connect(mapStateToProps)(Header);