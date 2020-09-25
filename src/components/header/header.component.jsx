import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.styles.scss';



const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/" style={{color:'#8ebfe7'}}>
                <i className="fas fa-crown" style={{ width: '30', height: '30'}}></i>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-md-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to='/shop'>SHOP</Link>
                    
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contact'>CONTACT</Link>
                    </li>
                    {
                        currentUser ? (
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => auth.signOut()} href='#0'>SIGN OUT</a>
                            </li>

                        ) : (
                            <li className="nav-item">
                                <Link to='/signin' className='nav-link'>SIGN IN</Link>
                            </li>
                        )
                    }
                
                </ul>
                <CartIcon></CartIcon>
            </div>
            
        </nav>
        {   hidden ? null :
            (<CartDropdown></CartDropdown>)

        }
    </div>
    /*
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
        */
);

// any time the store is updated, mapStateToProps will be called
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});

export default connect(mapStateToProps)(Header);