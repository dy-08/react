import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Gallery.module.scss'; // 마지막에 sass파일 넣어주면 좋음

const Gallery = () => {
    let [images, setImages] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    let load = async () => {
        try {
            setLoading(true);
            // axios는 파싱한 채로 들고옴 ( json() )
            let { data } = await axios.get('/gallery.json'); // ✨
            setImages(data);
        } catch (err) {
            setError('갤러리 로드 실패');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, []);

    if (error) return <p>{error}</p>;
    return (
        <section className={styles.gallery}>
            <div className={styles.grid}>
                {images.map((item) => (
                    // map을 사용할 때 중복없는 key값이 존재해야함 ✨
                    <div key={item.id} className={styles.card}>
                        <img src={item.url} alt={item.title} />
                        <div className={styles.title}>{item.title}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
