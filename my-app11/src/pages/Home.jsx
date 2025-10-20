import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Home.module.scss';

const Home = () => {
    // 원본 이미지
    let images = ['img__01.jpg', 'img__02.jpg', 'img__03.jpg', 'img__04.jpg'];
    // 무한루프용 확장이미지들
    let slides = [images[images.length - 1], ...images, images[0]];

    let [index, setIndex] = useState(1);
    let [hasTransition, setHasTransition] = useState(true);

    // setTimeOut – Ref로 변수를 생성 (useEffect에서 발생되는 이슈때문 ✅)
    let timerRef = useRef(null);

    useEffect(() => {
        startAuto();
        return stopAuto(); // 다른페이지로 이동시 멈춰
    }, []);

    let goNext = () => setIndex((item) => item + 1); // item: 현재 setIndex가 가지고있는 수

    let startAuto = () => {
        stopAuto();
        // timerRdf의 현재상태를 기억
        timerRef.current = setInterval(goNext, 3000);
    };

    let stopAuto = () => {
        clearInterval(timerRef.current);
    };
    // 끝, 처음의 클론에 도달하면 transition이 없어지고, 실제 위치로 점프하는 역할
    let handleTransitionEnd = () => {
        if (index === slides.length - 1) {
            setHasTransition(false);
            setIndex(1);
        } else if (index === 0) {
            setHasTransition(false);
            setIndex(images.length);
        }
    };
    useEffect(() => {
        if (!hasTransition) {
            // 리액트에서는 강제리플로우로 트렌지션만주면 에러 확률이 높아짐
            // 애니메이션을 같이 넣어줌 ✨
            let animationId = requestAnimationFrame(() => setHasTransition(true));
            return () => cancelAnimationFrame(animationId);
        }
    }, [hasTransition]);
    return (
        <section className={styles.home}>
            <h1 className={styles.title}>이미지 슬라이드가 보이는 홈</h1>
            <div className={styles.slider} onMouseEnter={stopAuto} onMouseLeave={startAuto}>
                <div
                    className={styles.track}
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                        transition: hasTransition ? `all 0.3s` : 'none',
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {/* 4개의 원본이지미 및 2개의 복사이미지 표시 */}
                    {/* {이미지들.map((img, i) => (
                        <img src={`${img}`} />
                    ))} */}
                    {slides.map((img, i) => (
                        // key가 의무적으로 들어감
                        // 절대경로로 들어감 ✨ ( /(루트) 시 public으로 들어가지는게 리액트 )
                        <img key={i} src={`/imgs/${img}`} alt={`img-${i}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
