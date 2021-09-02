import React from 'react';
import { Spinner } from 'reactstrap';
import './index.css';

export const AccessibleSpinner = props => {
    return (
        <div className="spinner-container">
            {props.isLoading ? (
                <div className="spinner-block">
                    <Spinner
                        color="primary"
                        role="alert"
                        aria-busy="true"
                    ></Spinner>
                </div>
            ) : (
                <div />
            )}
        </div>
    );
};
export default AccessibleSpinner;
