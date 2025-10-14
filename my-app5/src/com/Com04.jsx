import React from 'react';
import { useState } from 'react';
import './Com04.css';

const Com04 = () => {
    let [isLogin, setIsLogin] = useState(false);
    let [useName, setuseName] = useState('');

    let passLogin = () => {
        if (useName === 'admin') {
            setIsLogin(true);
        } else {
            alert('아이디가 올바르지 않습니다.');
        }
    };

    let passLogout = () => {
        setIsLogin(false);
        setuseName('');
    };

    return (
        <div className='section'>
            <h2>{isLogin ? '로그인성공' : '환영합니다 로그인이 필요합니다'}</h2>
            {!isLogin && (
                // 괄호안에는 1개만 들어가야해서 1개로 묶음
                <>
                    <input
                        type='text'
                        placeholder='아이디를 입력해주세요'
                        value={useName}
                        onChange={(e) => {
                            setuseName(e.target.value);
                        }}
                    />
                    <button onClick={passLogin}>로그인</button>
                </>
            )}
            {isLogin && <button onClick={passLogout}>로그아웃</button>}
        </div>
    );
};

export default Com04;
