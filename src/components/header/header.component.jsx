import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    
    <div className="header">
        <Link className="logo-container" to="/">
            <i className="fas fa-crown" style={{ fontSize: '48px'}}></i>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>

            {   
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>

                :
                <Link to='/signin' className='option'>SIGN IN</Link>
            }
        </div>
    </div>

);

// any time the store is updated, mapStateToProps will be called
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);