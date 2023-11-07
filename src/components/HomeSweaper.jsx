import { useState } from 'react';
import styles from './HomeSweaper.module.css';

export default () => {

    const [activeSlide, setActiveSlide] = useState(3);

    function handlePrev() {
        activeSlide > 1 ? setActiveSlide(cur => cur - 1 ) : null
    }

    function handleNext() {
        activeSlide <3 ? setActiveSlide(cur => cur + 1 ) : null
    }

    return (
        <div className={styles.container}>
                <img src="/images/slide1.jpg" alt="Slide 1" className={`${ activeSlide === 1 ? styles.active : ''} ${styles.image}`} />
                <img src="/images/slide2.jpg" alt="Slide 2" className={`${ activeSlide === 2 ? styles.active : ''} ${styles.image}`} />
                <img src="/images/slide3.jpg" alt="Slide 3" className={`${ activeSlide === 3 ? styles.active : ''} ${styles.image}`} />
            <div className={`${styles.arrow} ${activeSlide >=3 ? styles.not_alowed : ''}`} onClick={handleNext}>
                <img src="/images/arrow.svg" alt="" className={styles.arrow_img} />
            </div>
            <div className={`${styles.arrow} ${styles.arrow2} ${activeSlide <= 1 ? styles.not_alowed : ''}`} onClick={handlePrev}>
                <img src="/images/arrow2.svg" alt="" className={styles.arrow_img} />
            </div>
        </div>
    );
};
