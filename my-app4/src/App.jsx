import React from 'react';
import Test01 from './com/Test01';
import Test02 from './com/Test02';
import Test03 from './com/Test03';
import Test04 from './com/Test04';
import './App.css';

// .jsx 확장자(리엑트 파일)는 유일하게 생략가능
// Props: 부모 컴포넌트가 자식 컴포넌트에게 값을 전달 (부모->자식 일방적)
// 숫자를 Props로 보낼 때 계산할수도있으니 {숫자타입}으로 보낼 수 있음
// props는 함수도 전달 가능함
const App = () => {
    // 리엑트에서는 거의 화살표함수를 활용 ✅
    let emoji = () => {
        alert('👇');
    };
    let greet = () => {
        alert('Hello!');
    };
    return (
        <div>
            {/* Test01 컴포넌트 재사용 */}
            {/* <Test01 name='영호' /> */}
            {/* <Test01 name='미래' age={20} job='F/E' /> */}
            {/* clicked=>props 이름이 동일해야 됨 주의 */}
            {/* <Test02 text='클릭함수' clicked={emoji} /> */}
            <Test03 name='영호' age={20} />
            <Test04 btnName='인사하기' click={greet} />
        </div>
    );
};

export default App;
