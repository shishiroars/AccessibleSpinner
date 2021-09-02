import React from 'react';
import { Spinner } from 'reactstrap';
import './index.css';

/**
 * Adds a React component to show a loading icon.
 *
 *  - Roles
 *     - Show a loading icon.
 *     - Cover up the complete screen so no action can be performed while the loading animation is active.
 *
 * @param isLoading if true, a loading animation is seen on the screen.
 */

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
