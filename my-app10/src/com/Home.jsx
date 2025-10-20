import React from 'react';
import '../assets/Home.scss';
const Home = () => {
    return (
        <div>
            <video autoPlay>
                <source style={{ width: '100%', height: '100%' }} src='/src/assets/v.mp4' type='video/mp4' />
            </video>
        </div>
    );
};

export default Home;
