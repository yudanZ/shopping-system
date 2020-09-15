import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>Collection</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>Shoes & Bags</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>Womens</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>Mens</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>Kids</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>


        </div>
    </div>
)

export default HomePage;