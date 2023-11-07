import MyInput from '../components/MyInput'
import Captcha from '../components/Captcha'
import BigButton from '../components/BigButton'
import styles from './Signup.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Img from '../components/Img'
import { useContext } from 'react'
import { LoginContext } from '../Contexts/Context'

function Signup() {

    const {loginDispatch} = useContext(LoginContext);
    const navigate = useNavigate();

    function handleLogin() {
        const allInputs = document.querySelectorAll('input');

        const name = allInputs[0].value;
        const password = allInputs[2].value;
        const passwordconfirm = allInputs[3].value;

        if( password === passwordconfirm ) {
            loginDispatch({type: 'login', payload: {name, password}})
            return 1
        }
        else {
            alert('لطفا رمز خود را بررسی کنید')
            return 0
        }
    }

    function handleClick(event) {
        const allInputs = document.querySelectorAll('input');
        // console.log(allInputs)
        for (let i = 0; i < allInputs.length; i++) {
            if (!allInputs[i].value) return
        }

        if (handleLogin()) {
            navigate('/');
        } else {
            console.log('what?');
        }

        event.preventDefault()

    }
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.title}>ثبت نام</div>
                <div className={styles.inputs}>
                    <MyInput icon='person.svg' title='نام کاربری یا شماره همراه' placeholder='نام کاربری را وارد کنید' fontSize='0.8rem' active={true} />
                    <MyInput icon='call.svg' title='کد تایید' placeholder='کد تایید را وارد کنید' fontSize='0.8rem' />
                    <MyInput icon='lock.svg' title='رمز عبور' placeholder='رمز عبور را وارد کنید' fontSize='0.8rem' />
                    <MyInput icon='lock.svg' title='تکرار رمز عبور' placeholder='نکرار رمز عبور را وارد کنید' fontSize='0.8rem' />
                    <Captcha cls={styles.captcha} fontSize='0.8rem' />
                    <div className={styles.images}>
                        <Img name='google.svg' alt='google' />
                        <Img name='facebook.svg' alt='google' />
                        <Img name='twitter.svg' alt='google' />
                    </div>
                </div>
                <BigButton text='ثبت نام' fontSize='1.5rem' onClick={handleClick} />
                <a className={styles.small} href='/login'>از قبل حساب دارید؟</a>
            </div>
        </div>
    )
}

export default Signup
