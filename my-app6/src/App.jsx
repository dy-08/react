import React, { useEffect, useState } from 'react';
import Com01 from './com/Com01';
// useEffect : 화면이 바뀐 뒤에 실행할 코드
// useEffect( () => {
// 실행 될 코드
// return
//  }, [의존값] )
// [] => 처음 한번만 실행 (가장 많이 사용)
// [] 생략 => 렌더링 될 때 마다 실행
// [값] => 값이 바뀔 때 마다 실행 (true일때, false 일때, count -> 몇번만)
const App = () => {
    let [count, setCount] = useState(0);
    let [text, setText] = useState('');

    // 마운트 직후 한번만 실행
    useEffect(() => {
        console.log('여기는 처음 한번만 실행');
    }, []);

    // 매 렌더링 마다 실행 (DOM에서 변경이 일어나면 계속 랜더링해줌)
    useEffect(() => {
        console.log(`여기는 매번 실행 count=${count}, text=${text}`);
    });

    return (
        <div>
            <h2>useEffect : 마운트</h2>
            <h3>{count}</h3>
            {/* setCount(count + 1) 보다 정확한 값을 가짐 */}
            <button type='button' onClick={() => setCount((item) => item + 1)}>
                클릭
            </button>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <h3>{text}</h3>
            <Com01 />
        </div>
    );
};

export default App;
