import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleInputChange, label, ...otherProps}) => (

    <div className='group'>
        {label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label` }>{label}</label>)
            : null
        }
        
        <input 
            
            name={otherProps.name} 
            tpye={otherProps.tpye}  
            className='form-input' 
            onChange = {handleInputChange}
            required />
    </div>
    )

export default FormInput;