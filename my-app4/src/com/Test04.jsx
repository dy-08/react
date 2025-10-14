import React from 'react';
import './Test04.css';

const Test04 = ({ btnName, click }) => {
    return (
        <div>
            <button className='btn' onClick={click}>
                {btnName}
            </button>
        </div>
    );
};

export default Test04;
