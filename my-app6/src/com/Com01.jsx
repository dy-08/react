import React, { useState, useEffect } from 'react';

const Com01 = () => {
    let [num, setNum] = useState(0);
    let [starting, setStarting] = useState(true);

    useEffect(() => {
        if (!starting) return;
        const intervalId = setInterval(() => {
            // 이렇게 사용하면 에러남 { kk + 1 } => undefined가 반환 됨
            // 오류이유: { 코드블럭으로 인식이기에 return 해줘야함 }
            setNum((kk) => {
                //     kk + 1; // ❌
                return kk + 1; // ⭕
            });
            // setNum((kk) => kk + 1); // 코드블럭이 없음 바로 반환 됨⭕
        }, 1000);

        // clean-up
        // :useEffect 끝날 때 할 일
        return () => {
            clearInterval(intervalId);
        };
    }, [starting]);
    return (
        <>
            <h2>1초마다 증가: {num}</h2>
            <button onClick={() => setStarting(false)} disabled={!starting}>정지</button>
            <button onClick={() => setStarting(true)} disabled={starting}>재시작</button>
        </>
    );
};

export default Com01;
