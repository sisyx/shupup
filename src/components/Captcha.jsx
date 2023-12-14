import { HOMEPAGE } from '../App'
import styles from './Captcha.module.css'
import MyInput from './MyInput'

function Captcha({cls='', fontSize='1rem'}) {
    return (
        <div className={`${styles.container} ${cls}`}> 
             <img src={`${HOMEPAGE}/images/captcha.png`} alt="captcha" className={styles.code} />
             <MyInput icon='captcha-again.svg' title='کد امنیتی' placeholder='' cls={styles.my_input} fontSize={fontSize} />
        </div>
    )
}

export default Captcha
