import { useRef } from 'react';
import styles from './HomeCard.module.css'
function HomeCard({card}) {
    const image = useRef();
    const {text, imageSrc} = card;

    const rotateList = [-3,-2,-1,1,2,3];
    const rotate = rotateList[Math.floor(Math.random() * 6)];

    function handleMouseOver() {
        const img = image.current;
        img.style.rotate = '0deg';
    }

    function handleMouseOut() {
        const img = image.current;
        img.style.rotate = `${rotate}deg`;
    }

    return (
        <div className={styles.card} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className={styles.card_title}>{text}</div>
            <img src={imageSrc} alt="card" className={styles.image} ref={image} style={{rotate: `${rotate}deg`}} />
            <div className={styles.card_link}>دیدن بیشتر</div>
        </div>
    )
}

export default HomeCard
