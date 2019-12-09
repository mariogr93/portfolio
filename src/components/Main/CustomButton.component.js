import React from 'react';

const CustomButton = ({
	children,
    isGoogleSignIn,
    isGithubSignIn,
	inverted,
	...otherProps
    }) => (
        <button
            className={`
                ${inverted ? 'inverted' : ''} 
                ${isGoogleSignIn ? 'google-sign-in' : ''}
                ${isGithubSignIn ? 'github-sign-in' : ''} custom-button`}
                {...otherProps}
        >
            {children}
        </button>
);

export default CustomButton;