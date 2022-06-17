import React from 'react';

const Button = ({children, sortEbbing, sortAdvance, i}) => {
    return (
        <button onClick={i === 0 ? sortEbbing : sortAdvance} className='btnSort'>
            <span>{children}</span>
        </button>
    );
};

export default Button;