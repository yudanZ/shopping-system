import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { selectSections } from '../../redux/directory/directory.selectors';
const  Directory = ({sections}) => (
    <div className="directory-menu">
            {
                sections.map( ({title, imageUrl, id, linkUrl}) => {
                   return <MenuItem 
                                key={id} 
                                title={title} 
                                imageUrl={imageUrl} 
                                linkUrl={linkUrl}>
                            </MenuItem>
                 } )
            }
                
            </div>
) 

const mapStateToProps =  createStructuredSelector({
    sections: selectSections
}

)

export default connect(mapStateToProps)(Directory);