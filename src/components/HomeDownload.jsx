import styles from './HomeDownload.module.css';
import Img from './Img'

function HomeDownload() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div 
                className={styles.three_dot}
                onMouseOver={event => {
                    event.target.classList.add(styles.hovered)
                }}
                onMouseOut={event => {
                    event.target.classList.remove(styles.hovered)
                }}
                >
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
                <div className={styles.option}>
                    <Img name='bazar.svg' />
                    <span>دانلود از بازار</span>
                </div>
                <div className={styles.option}>
                    <Img name='apple-store.svg' />
                    <span>دانلود از گوگل پلی</span>
                </div>
                <div className={styles.option}>
                    <Img name='apple-store.svg' />
                    <span>دانلود از آپل استور</span>
                </div>
            </div>
            <div className={styles.right}>
                <span>دانلود اپلیکیشن وب شاب</span>
                <img src="/images/Logo.png" alt="Logo" />
            </div>            
        </div>
    )
}

export default HomeDownload
