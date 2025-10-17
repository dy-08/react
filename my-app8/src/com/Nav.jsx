import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    {/* 리엑트에서는 a태그가 없음, Link를 가지고와서 사용해야함 (react-router-dom hooks가 제공) */}
                    {/* sass에서 Link를 스타일 적용할 때 a 태그로 스타일을 지정해줌 */}
                    {/* <a href=''></a>, a 태그의 href옵션이 Link에서는 to */}
                    <Link to='/home'>home</Link>
                </li>
                <li>
                    <Link to='/about'>about</Link>
                </li>
                <li>
                    <Link to='/map'>map</Link>
                </li>
                <li>
                    <Link to='/map'>com</Link>
                </li>
                <li>
                    <Link to='/community'>community</Link>
                </li>
                <li>
                    <Link to='/contact'>contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
