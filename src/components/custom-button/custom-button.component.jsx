import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn,...otherPorps }) =>(
    <div>
        { isGoogleSignIn ?

            <div className="google-btn">
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google icon"/>
                </div>
                <p className="btn-text"><b>Sign in with google</b></p>
            </div>

        :
            <button {...otherPorps} className= 'btn custom-button'>
                {children}
            </button>
        
        
        }
    </div>
)

export default CustomButton