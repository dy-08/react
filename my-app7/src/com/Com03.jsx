import React from 'react';
import { useState, useEffect } from 'react';

const Com03 = () => {
    let [name, setName] = useState('');
    useEffect(() => {
        console.log(`이름이 ${name}으로 변경되었습니다`);
    }, [name]);
    return (
        <div>
            <input type='text' placeholder='이름을 입력하세요' value={name} onChange={(e) => setName(e.target.value)} />
            <h2>입력된 이름: {name || '이름이 입력되지 않음'}</h2>
        </div>
    );
};

export default Com03;
