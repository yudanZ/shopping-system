import React from 'react';
import './with-spinner.styles.scss';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps}) => {
        return isLoading ? (
            <div className="text-center spinner_container">
                <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    };
    return Spinner;
}

export default WithSpinner;