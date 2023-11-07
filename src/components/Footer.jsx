import styles from './Footer.module.css'
function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.top_line}></div>
            <div className={styles.footer_main_content}>
                <div className="footer_main_content__left">
                    <img src="/images/Logo.png" />
                    <p className={styles.left_text}>Your natural candle made for your home and for your wellness.</p>
                </div>
                <div className={styles.footer_main_content__right}>
                    <div className={styles.links_list}>
                        <p className={styles.links_list_topic}>Discovery</p>
                        <a href="#" className={styles.links_list_link}>New season</a>
                        <a href="#" className={styles.links_list_link}>Most searched</a>
                        <a href="#" className={styles.links_list_link}>Most selled</a>
                    </div>
                    <div className={styles.links_list}>
                        <p className={styles.links_list_topic}>About</p>
                        <a href="#" className={styles.links_list_link}>Help</a>
                        <a href="#" className={styles.links_list_link}>Shipping</a>
                        <a href="#" className={styles.links_list_link}>Affiliate</a>
                    </div>
                    <div className={styles.links_list}>
                        <p className={styles.links_list_topic}>Info</p>
                        <a href="#" className={styles.links_list_link}>Contact us</a>
                        <a href="#" className={styles.links_list_link}>Privacy Policies</a>
                        <a href="#" className={styles.links_list_link}>Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
            <div className={styles.footer_under}>
                <div className={styles.footer_under_container}>
                    <div className={styles.footer_under_right}>©Candleaf All Rights Reserved.</div>
                    <div className={styles.footer_under_left}>Designed with ❤️ by uxbly</div>
                </div>
            </div>
            </>
    )
}

export default Footer
