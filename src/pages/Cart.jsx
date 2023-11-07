import { useContext } from 'react'
import { CardContext } from '../Contexts/Context'
import styles from './Cart.module.css'
import { useNavigate } from 'react-router-dom';
export default function Cart() {

    const navigate = useNavigate();
    const {cart} = useContext(CardContext);

    const totalPrice = cart.reduce((acc, cur) => acc + (cur.price * cur.count),0);

    function handleGotopayClick(event) {
        navigate('/payment')
    }

    return (
        <>
        <div className={styles.cartPage}>

        <div className={styles.cart}>

            <div className={styles.productSec}>
                <div className={styles.title_product}>

                    <div className={styles.product}>محصول</div>

                    <div className={styles.price}>قیمت</div>

                    <div className={styles.number}>تعداد</div>

                    <div className={styles.total}>جمع جزء</div>

                </div>

                {
                    cart 
                    ? cart.map(product => 
                        <div className={styles.product_item} key={`xlasd;lmasd-${product.count}-${Math.floor(Math.random() * 1000)}`}>
                            <div className={styles.product_p}>
        
                                <div className={styles.icon}>
                                    <img src="./img/icons8-cancel-60 1.svg" alt="" />
                                </div>
        
                                <div className={styles.img}>
                                    <img src="./img/Frame 7.svg" alt="" />
                                </div>
        
                                <div className={styles.description}>{product.name ? product.name : 'بدون نام'}</div>
        
                            </div>
        
                            <div className={styles.price_p}>
                                {product.price.toLocaleString()}
                            </div>
        
                            <div className={styles.counter_p}>
        
                                <img src="./img/icons8-plus-52 1.svg" alt="" />
        
                                <div className={styles.text_counter}>{product.count}</div>
        
                                <img src="./img/icons8-delete-100 1.svg" alt="" />
        
                            </div>
        
                            <div className={styles.total_p}>{(product.price * product.count).toLocaleString()}</div>
        
                        </div>
        )
                    : ''
                }
                <div className={styles.line_2}></div>

                <div className={styles.down_product}>

                    <div className={styles.inputbox_copen}>
                        <input placeholder="کد تخفیف" type="text" name="text" className={styles.input} />
                    </div>
    
                    <div className={styles.button_copen}>
    
                        <button type="button">اعمال تخفیف</button>
    
                    </div>
    
                    <div className={styles.button_update}>
    
                        <button type="button">بروزرسانی سبد خرید</button>
    
                    </div>
                    
                </div>

          
                

            </div>

            <div className={styles.paySec}>


                <div className={styles.sec_title_pay}>

                    <div className={styles.title_pay}>جمع کل سبد خرید</div>

                </div>

                <div className={styles.moneyPartial}>

                    <div className={styles.textp}>جمع جزء</div>

                    <div className={styles.moneyp}>۴۲.۳۰۰.۰۰۰</div>

                </div>

                <div className={styles.lin}></div>
n
                <div className={styles.moneyGeneral}>

                    <div className={styles.textg}>مجموع</div>

                    <div className={styles.moneyg}>{totalPrice.toLocaleString()}</div>

                </div>

                <div className={styles.button}>

                    <button type="button" onClick={handleGotopayClick}>ادامه جهت تسویه حساب</button>

                </div>


            </div>

        </div>

    </div>
    </>

    )
} 