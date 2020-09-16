import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <i class="fas fa-crown" style={{ fontSize: '48px'}}></i>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>Contact</Link>
        </div>
    </div>

)

export default Header;