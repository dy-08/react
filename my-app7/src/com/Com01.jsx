import React from 'react';
import { useState, useEffect } from 'react';
// 로컬스토리지에 메모를 0.05초 뒤에 자동저장하는 프로그램
// 리셋버튼을 클릭하면 로컬스토리지가 클리어
// 메모: input과 비슷하지만 많은 양을 저장할 수 있는 textarea를 사용
// localStorage.setItem(name, '홍길동): 로컬스토리지에 name이라는 키로 입력
// localStorage.getItem(name): 로컬스토리지에 name이라는 키를 호출
// localStorage.removeItem(name): 로컬스토리지에 name 클리어

const Com01 = () => {
    // let [text, setText] = useState('');
    // useEffect(() => {
    //     setTimeout(() => {
    //         localStorage.setItem('msg', text);
    //     }, 50);
    // });
    // return (
    //     <>
    //         <textarea
    //             name=''
    //             id=''
    //             onChange={(e) => {
    //                 setText(e.target.value);
    //             }}
    //         ></textarea>
    //         <h4>{text}</h4>
    //         <h4>{localStorage.getItem('msg')}</h4>
    //     </>
    // );
    let [text, setText] = useState('');
    let [status, setStatus] = useState('saving'); // saving, saved, cleared
    let memoKey = '메모장입니다';

    useEffect(() => {
        let show = localStorage.getItem(memoKey);
        setText(show);
    }, []);

    useEffect(() => {
        setStatus('saving');
        const id = setTimeout(() => {
            localStorage.setItem(memoKey, text);
            setStatus('saved');
        }, 500);

        return () => clearTimeout(id);
    }, [text]);

    let clearS = () => {
        localStorage.removeItem(memoKey);
        setStatus('cleared');
    };
    return (
        <>
            <h2>자동저장 메모장</h2>
            <textarea placeholder='메모를 입력해주세요' value={text} onChange={(e) => setText(e.target.value)} />
            <h3>{status === 'saving' && '저장 중'}</h3>
            <h3>{status === 'saved' && '저장 됨'}</h3>
            <h3>{status === 'cleared' && '클리어 됨'}</h3>
            <button onClick={clearS}>클리어</button>
        </>
    );
};

export default Com01;
