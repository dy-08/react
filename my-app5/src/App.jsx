import React from 'react';
import Com01 from './com/Com01';
import Com02 from './com/Com02';
import Com03 from './com/Com03';
import Com04 from './com/Com04';
import './App.css';
// useState(상태관리 훅) => '컴포넌트'안에서 변할 수 있는 데이터
// 리액트는 누가 바뀌었는지를 추적해서 그 부분만 다시 랜더링을 함
// useState는 직접 수정이 ❌
const App = () => {
    return (
        <div>
            <Com01 />
            <Com02 />
            <Com03 />
            <Com04 />
        </div>
    );
};

export default App;
