import React from 'react';
import { Link } from 'react-router-dom'; // a 태그 대신 사용할 Link 불러오기
import styles from '../styles/Navbar.module.scss'; // module scss 파일 불러오기

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {/* index.scss에서 알려주는 스타일은 기본적으로 적용 (예: container) */}
            <div className='container'>
                <ul className={styles.menu}>
                    <li>
                        <Link to='/'>홈</Link>
                    </li>
                    <li>
                        <Link to='/about'>회사소개</Link>
                    </li>
                    <li>
                        <Link to='/gallery'>갤러리</Link>
                    </li>
                    <li>
                        <Link to='/contact'>문의</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
