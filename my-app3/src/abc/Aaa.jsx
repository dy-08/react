import React from 'react';
import st from './Aaa.module.css';

const Aaa = () => {
    return (
        <div>
            {/* 중복 클래스네임일 때 module로 불러옴 */}
            <h1 className={st.hello}>반갑습니다</h1>
        </div>
    );
};

export default Aaa;
