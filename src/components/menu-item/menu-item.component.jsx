import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, history, linkUrl , match}) => (
    <div className= 'menu-item'>
        <div className="imageContainer" onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <img src={imageUrl} alt="img"></img>
        </div>
        <div className="content">
            <h1 className='title' onClick={() => history.push(`${match.url}${linkUrl}`)}>{ title }</h1>
        </div>
    </div>
);

export default withRouter(MenuItem);