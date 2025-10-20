import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navi.scss';

const Navi = () => {
    return (
        <div className='naviwrap'>
            <div className='logowrap'>
                <Link to='/home'>
                    <img
                        src='data:image/png;base64,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'
                        alt='로고'
                    />
                </Link>
            </div>
            <ul className='navi'>
                <li>
                    <Link to='vision'>비전</Link>
                </li>
                <li>
                    <Link to='history'>발자취</Link>
                </li>
                <li>
                    <Link to='greetings'>축하메세지</Link>
                </li>
                <li>
                    <Link to='public'>홍보관</Link>
                </li>
                <li>
                    <Link to='contest'>사진 공모전</Link>
                </li>
                <li>
                    <Link to='information'>주요행사안내</Link>
                </li>
            </ul>
            <div></div>
        </div>
    );
};

export default Navi;
