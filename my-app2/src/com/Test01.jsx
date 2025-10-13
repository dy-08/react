import React from 'react';
import './Test01.css';

let title = '리엑트 처음';
let color = 'skyblue';
let year = new Date().getFullYear();

const Test01 = () => {
    return (
        <div>
            <h2 className='title'>{title}</h2>
            <p style={{ color: color }}>지금은 {year}년도 입니다</p>
        </div>
    );
};

export default Test01;
