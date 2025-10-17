import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './com/Nav';
import Home from './com/Home';
import About from './com/About';
import Map from './com/Map';
import Nav2 from './com/Nav2';
import Contact from './com/Contact';
import Community from './com/Community';
// <Route>: 해당경로에 컴포넌트를 매칭
// <Routes>: 여러개의 <Route>들을 감싸는 컨테이너
// <BrowserRouter>: <Routes>를 사용할 수 있게 해주는 컨테이너
// <Route path="/about" element={<Com01 />}>
// <Link to="/about">회사소개</Link> => a 태그와 동일

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                {/* 스크립에 비유하면 이 공간안에 랜더링됨 (예: Routes.innerHTML = code...) */}
                <Route path='/home' element={<Home />} />
                {/* element: 실제 연결시켜주는 옵션 */}
                <Route path='/about' element={<About />} />
                <Route path='/map' element={<Map />} />
                <Route path='/community' element={<Community />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Nav2 />
        </BrowserRouter>
    );
};

export default App;
