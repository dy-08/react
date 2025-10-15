import React from 'react';
import { useEffect } from 'react';

const Com02 = () => {
    useEffect(() => {
        alert('안녕하세요!');
    }, []);
    return (
        <>
            <h1>useEffect 기본</h1>
            <h3>화면이 열릴 때 한번만 실행되는 기본을 사용합니다</h3>
        </>
    );
};

export default Com02;
