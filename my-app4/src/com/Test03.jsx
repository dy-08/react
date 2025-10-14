import React from 'react';

const Test03 = ({ name, age }) => {
    return (
        <div>
            <h1>프롭스 기초 예제</h1>
            <p>안녕하세요, {name}님!</p>
            당신의 나이는 {age}살 입니다.
        </div>
    );
};

export default Test03;
