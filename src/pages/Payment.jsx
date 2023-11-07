import { useContext, useEffect, useRef, useState } from 'react';
import MyInput from '../components/MyInput';
import styles from './Payment.module.css';
import Captcha from '../components/Captcha';
import Img from '../components/Img';
import { CardContext } from '../Contexts/Context';
import { useNavigate } from 'react-router-dom';
import BigButton from '../components/BigButton'

function Payment() {

    const [remainedTime, setRemainedTime] = useState(20);
    const {cart, cartDispatch} = useContext(CardContext);

    const totalPrice = cart.reduce((acc, cur) => acc + (cur.price * cur.count),0);
    const navigate = useNavigate();

    function pay() {
        cartDispatch({type: 'pay'});
        navigate('/');
    }

    function handleClickPay(event) {
        pay();
        event.preventDefault();
    }

    useEffect(() => {
        const clockInterval = setInterval(() => {
            setRemainedTime(cur => {
                if (cur <= 1) {
                    clearInterval(clockInterval)
                    return 0
                }
                return cur - 1});
        }, 1000);

        return () => clearInterval(clockInterval)
    }, [])

    useEffect(() => {
        const allInputs = document.querySelectorAll('input');
        const allButtons = document.querySelectorAll('button');

        
        if (remainedTime <= 0) {
            console.log(remainedTime);
            for (let i = 0; i < allInputs.length; i++) {
                allInputs[i].disabled = true;
                console.log(allInputs[i]);
            }

            setTimeout(() => {
                navigate(-1)
            }, 5000)
            
        }

    }, [remainedTime])

    function toFormal(time) {
        let min, sec;
        if (time < 59) {
            min = 0;
            sec = time;
        } else {
            min = Math.floor(time / 60);
            sec = time - (min * 60);
        }

        sec = sec.toString().length == 1 ?  `0${sec}` : sec
        min = min.toString().length == 1 ?  `0${min}` : min
        return min + ':' + sec
    }

    function handleReqPass2(event) {
        const btn = event.target;
        btn.classList.add(styles.loading);

        setTimeout(() => btn.classList.remove(styles.loading), 5000)
    }

    return (
        // <div className={styles.all}>
            <div className={styles.container}>
                <div className={`${styles.popup} ${remainedTime <= 0 ? styles.active : ''}`}>شما به صفخه ی قبل بازگردانده میشوید</div>
                <div className={styles.header}>
                    <Img name='seyed-logo.svg' />
                    <div className={styles.header_center}>درگاه پردخت اینترنتی </div>
                    <Img name='seyed-logo.svg' />
                </div>
                <div className={styles.left}>
                    <div className={styles.left_time}>
                        <span>{toFormal(remainedTime)}</span>
                        <span>زمان باقی مانده</span>
                    </div>
                    <div className={styles.horizontal_line}></div>
                    <div className={styles.cart_details}>
                        <div className={styles.cart_details_item}>
                            <div className={styles.cart_details_info}>
                                <div className={styles.cart_details_info_title}>پذیرنده</div>
                                <div className={styles.cart_details_info_des}>ناب اندیشان برسیان</div>
                            </div>
                            <Img name='home-icon.svg' />
                        </div>
                        <div className={styles.cart_details_item}>
                            <div className={styles.cart_details_info}>
                                <div className={styles.cart_details_info_title}>مبلغ</div>
                                <div className={styles.cart_details_info_des}>
                                    <span>تومان</span>
                                    <span>{totalPrice.toLocaleString()}</span>
                                </div>
                            </div>
                            <Img name='money.svg' />
                        </div>
                        <div className={styles.cart_details_item}>
                            <div className={styles.cart_details_info}>
                                <div className={styles.cart_details_info_title}>شماره پذیرنده </div>
                                <div className={styles.cart_details_info_des}>112115612156151</div>
                            </div>
                            <Img name='home-icon.svg' />
                        </div>
                        <div className={styles.cart_details_item}>
                            <div className={styles.cart_details_info}>
                                <div className={styles.cart_details_info_title}> سایت پذیرنده</div>
                                <div className={styles.cart_details_info_des}>www.nabandishan.ir</div>
                            </div>
                            <Img name='world.svg' />
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right_title}>اطلاعات کارت را وارد کنید</div>
                    <MyInput cls={styles.input} title='شماره کارت' placeholder='---- ---- ---- ----' icon='card.svg' />
                    <MyInput cls={styles.input} title='CCV2' placeholder='CVV2' icon='cvv2.svg' />
                    <div className={styles.expire_date_container}>
                        <MyInput  cls={styles.input} title='' placeholder='سال'/>
                        <MyInput  cls={styles.input} title='تاریخ انقضا' placeholder='ماه'/>
                    </div>
                    <Captcha cls={styles.captcha} />
                    <div className={styles.pass_2_container}>
                        <button className={styles.button} onClick={handleReqPass2}>در خوست رمز بویا</button>
                        <MyInput cls={styles.input} title='رمز دوم' placeholder='رمز دوم' icon='lock-2.svg' />
                    </div>
                    <BigButton text='پرداخت' color='var(--accent-color)' onClick={handleClickPay} />
                </div>
            </div>
        // </div>
    )
}

export default Payment