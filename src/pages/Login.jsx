import { Link, useNavigate } from 'react-router-dom'
import BigButton from '../components/BigButton'
import Captcha from '../components/Captcha'
import MyInput from '../components/MyInput'
import styles from './Login.module.css'
import { useContext } from 'react'
import { LoginContext } from '../Contexts/Context'
import { HOMEPAGE } from '../App'

function Login() {

    const navigate = useNavigate()
    const {loginDispatch} = useContext(LoginContext);

    function handleLogin() {
        const allInputs = document.querySelectorAll('input');
        for (let i = 0; i < allInputs.length; i++) {
            if (!allInputs[i].value) return
        }

        const name = document.querySelector('input').value;
        const password = document.querySelectorAll('input')[1].value;

        loginDispatch({type: 'login', payload: {name, password}})
    }

    function handleEnter(event) {
        event.preventDefault();
        const inputs = document.querySelectorAll('input');

        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                alert('You Must Fill All Inputs')
                return
            }
        }
        handleLogin();
        navigate(HOMEPAGE);
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.title}>ورود به حساب</div>
                <MyInput icon='person.svg' title='نام کاربری یا شماره همراه' placeholder='نام کاربری را وارد کنید' active={true} />
                <MyInput icon='lock.svg' title='رمز عبور' placeholder='رمز عبور را وارد کنید' />
                <Captcha />
                <div className={styles.smalls}>
                    <Link className={styles.small_left} to={`${HOMEPAGE}/forgot-pass`}>رمز عبور خود را فراموش کرده اید؟</Link>
                    <Link className={styles.small_right} to={`${HOMEPAGE}/sign-up`}>
                        <span>حساب جدید بسازید</span>
                        {/* <input type="checkbox" /> */}
                    </Link>
                </div>
                <BigButton text='ورود' onClick={handleEnter} />

                <div className={styles.externals}>
                    <div className={styles.externals_title}>
                        ...ثبت نام کنید...
                    </div>
                    <div className={styles.external_images}>
                        <img src={`${HOMEPAGE}/images/facebook.svg`} alt="facebook" />
                        <img src={`${HOMEPAGE}/images/google.svg`} alt="google" />
                        <img src={`${HOMEPAGE}/images/twitter.svg`} alt="twitter" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
