import React from 'react';
// 함수 전달 Props
// prams
// text: 문자로 받을 예정
// clicked: 함수로 받을 예정
const Test02 = ({ text, clicked }) => {
    return (
        <div>
            <button onClick={clicked}>{text}</button>
        </div>
    );
};

export default Test02;
