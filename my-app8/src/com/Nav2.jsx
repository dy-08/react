import React from 'react';
import { useNavigate } from 'react-router-dom';
const Nav2 = () => {
    let navigator = useNavigate();
    return (
        <div>
            <button onClick={() => navigator('/home')}>홈으로</button>
            <button onClick={() => navigator('/about')}>회사소개</button>
            <button onClick={() => navigator('/map')}>오시는 길</button>
            <button onClick={() => navigator('/community')}>오시는 길</button>
            <button onClick={() => navigator('/contact')}>오시는 길</button>
        </div>
    );
};

export default Nav2;
