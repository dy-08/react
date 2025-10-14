import React from 'react';
// { name } => props
const Test = ({ name, age = '22', job = 'B/E' }) => {
    return (
        <div>
            <h1>안녕하세요🖐 {name}님!</h1>
            <h1>
                {age}, {job} 확인되었습니다
            </h1>
        </div>
    );
};

export default Test;
