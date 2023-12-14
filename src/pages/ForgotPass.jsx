import { useContext, useEffect } from 'react';
import BigButton from '../components/BigButton';
import ForgotPassInput from '../components/MyInput';
import styles from './ForgotPass.module.css';
import { LoginContext } from '../Contexts/Context';
import { useNavigate } from 'react-router-dom';
import { HOMEPAGE } from '../App';

function ForgotPass() {

    const navigate = useNavigate();
    const {loginDispatch} = useContext(LoginContext);

    useEffect(() => {
        console.log(loginDispatch);
    }, [])

    function handleLogin() {
        const allInputs = document.querySelectorAll('input');

        const name = 'unnamed user';
        const password = document.querySelectorAll('input')[2].value;
        const passwordconfirm = document.querySelectorAll('input')[3].value;


        // console.log(!Number(allInputs[0].value) || allInputs[0].value.length !== 11);

        if( password === passwordconfirm ) {
            if (!Number(allInputs[0].value) || allInputs[0].value.length !== 11) {
                alert('لطفا شماره تلفن مناسب تری انتخاب کنید');
                return 0
            } else {
                loginDispatch({type: 'login', payload: {name, password}})
                return 1
            }
        }
        else {
            if (!Number(allInputs[0].value) || allInputs[0].value.length !== 11) {
                alert('لطفا شماره تلفن مناسب تری انتخاب کنید');
                return 0
            } else {
                alert('لطفا رمز خود را بررسی کنید')
                return 0
            }
        }
    }

    function handleClick(event) {
        const allInputs = document.querySelectorAll('input');
        // console.log(allInputs)
        for (let i = 0; i < allInputs.length; i++) {
            if (!allInputs[i].value) return
        }

        if (handleLogin()) {
            navigate(`${HOMEPAGE}`);
        } else {
            console.log('what?');
        }

        event.preventDefault()

    }

    return (
        <div className={styles.container}>
            <div className={styles.form} action='POST'>
                <div className={styles.title}>فراموشی رمز</div>
                <ForgotPassInput icon='person.svg' title='شماره همراه' placeholder='شماره تلفن را وارد کنید' active={true} />
                <div className={styles.auth_code}>
                    <button className={styles.auth_code_btn}>ارسال کد</button>
                    <ForgotPassInput icon='call.svg' title='کدتایید' placeholder='کد تایید را وارد کنید' cls={styles.auth_code_input} />
                </div>
                <ForgotPassInput icon='lock.svg' title='رمز عبور جدید' placeholder='رمز عبور جدید را وارد کنید' />
                <ForgotPassInput icon='lock.svg' title='تکرار رمز عبور جدید' placeholder='تکرار رمز عبور جدید را وارد کنید' />
                <BigButton onClick={handleClick} />
            </div>
        </div>
    )
}

export default ForgotPass
