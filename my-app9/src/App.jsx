import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './com/Nav';
import Subpage from './com/Subpage';

function App() {
    return (
        <>
            <Nav />
            <hr />
            <Routes>
                <Route path='/' element={<Subpage title='홈' sub='홈' />} />
                {/* path='/' 루트를 쓰면 home은 사용 할 수 없음 */}
                <Route path='/home' element={<Subpage title='회사' sub='좋은 회사' />} />
                <Route path='/about' element={<Subpage title='회사소개' sub='무한상사' />} />
                <Route path='/contact' element={<Subpage title='문의' sub='게시판' />} />
            </Routes>
        </>
    );
}

export default App;
