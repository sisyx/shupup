import styles from './HomePlus.module.css';
function HomePlus() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.left_title}>
                    <div className={styles.see_all}>
                        <img src="/images/homePlusArrow.png" alt="<" />
                        <span>مشاهده همه</span>
                    </div>
                    <div className={styles.left_title_title}>
                        <span>ارسال فوری و رایگان</span>
                        <img src="/images/homePlusIcon.png" alt="(:)" />
                    </div>
                </div>
                <div className={styles.images}>
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12].map(
                            num => <img src='/images/homePlusMain.png' alt='(:)' className={styles.image} key={`xslas${num}`} />
                        )
                    }
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.title}>WebShop+Plus</div>
                <a href="#" className={styles.sign_in_btn}>عضویت</a>
                <img src="/images/homePlusMain.png" alt="" className={styles.main_image} />
            </div>
        </div>
    )
}

export default HomePlus
