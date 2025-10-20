import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Template from './com/Template';
import Navi from './com/Navi';
import Home from './com/Home';
import './App.css';

const App = () => {
    return (
        <div className='appwrap'>
            <Navi />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/vision' element={<Template pageName='비전' />} />
                <Route path='/history' element={<Template pageName='발자취' />} />
                <Route path='/greetings' element={<Template pageName='축하메세지' />} />
                <Route path='/public' element={<Template pageName='홍보관' />} />
                <Route path='/contest' element={<Template pageName='사진 공모전' />} />
                <Route path='/information' element={<Template pageName='주요행사안내' />} />
            </Routes>
        </div>
    );
};

export default App;
