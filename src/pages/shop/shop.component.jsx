import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview.component/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        return(
            <div className='shop-page'>
                {
                    this.state.collections.map( ({id,title, items}) => (

                        <CollectionPreview key={id} title={title} items={items}></CollectionPreview>

                    ))
                }
                
            </div>
        );
    }
}

export default ShopPage;