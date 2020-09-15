import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
class  Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'collection',
                    imageUrl: '/images/collections.jpg',
                    id: 1,
                    linkUrl: 'collection'

                },
                {
                    title: 'womens',
                    imageUrl: '/images/women.jpg',
                    id: 2,
                    linkUrl: 'womens'

                },
                {
                    title: 'mens',
                    imageUrl: '/images/man.jpg',
                    id: 3,
                    linkUrl: 'mens'

                },
                {
                    title: 'kids',
                    imageUrl: '/images/kids.jpg',
                    id: 4,
                    linkUrl: 'kids'

                },
                {
                    title: 'shoes & bags',
                    imageUrl: '/images/shoes.jpg',
                    id: 5,
                    linkUrl: 'shoes&bags'

                }

            ]
        }

    }

    render(){
        return(
            <div className="directory-menu">
            {
                this.state.sections.map( ({title, imageUrl, id, linkUrl}) => {
                   return <MenuItem 
                                key={id} 
                                title={title} 
                                imageUrl={imageUrl} 
                                linkUrl={linkUrl}>
                            </MenuItem>
                 } )
            }
                
            </div>
        );
    }
} 

export default Directory;