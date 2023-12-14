import styles from './Product.module.css'
import { useContext, useEffect, useRef, useState } from 'react';
import Img from '../components/Img';
import SpeciaProductSimilarsList from '../components/SpeciaProductSimilarsList';
import Comments from '../components/Comments';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { CardContext, ProductsContext } from '../Contexts/Context';
import { HOMEPAGE } from '../App';

function Product() {

    const {cartDispatch} = useContext(CardContext);
    const [isAddedToCart, setIsAddedToCart ] = useState(0);
    const [selectedImage, setSelectedImage] = useState(1);
    const navigate = useNavigate();
    
    const [searchParams, setSearchParams] =useSearchParams()
    
    const id = searchParams.get('id');

    const {products} = useContext(ProductsContext)
    console.log(products);
    const selectedProduct = products.find(prod => prod.id === id);
    const {price, offPercent, color, image, name} = selectedProduct
    const initialCount = selectedProduct.count
    const [count, setCount] = useState(initialCount);

    const totalPrice = (count * price);

    function handleIncCount(event) {
        setCount(cur => cur + 1);
    }

    function handleDecCount(event) {
        setCount(cur => cur > 1 ? cur - 1 : cur);
    }

    function handleAddTOCart(event) {
        if (isAddedToCart)  navigate('/cart')
        else {
            setIsAddedToCart(1)
            cartDispatch({type: 'addToCart', payload: {price, image, count, name }})
        }
    }

    const productMainImage = useRef()
    useEffect(function () {
        productMainImage.current.classList.add(styles.animate_main_image);
        setTimeout(() => {
            productMainImage.current.classList.remove(styles.animate_main_image);
        }, 2000)
        // productMainImage.current.classList.toggle(styles.animate_main_image_2) 
    }, [selectedImage])


    const colorsList = {'مشکی': '#000', 'قرمز': '#F00', 'سفید': '#FFF', 'آبی': '#00F', 'زرد': '#FF0'};

    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <div className={styles.product_info}>
                    <div className={styles.product_text}>
                    یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
                    </div>
                    <div className={styles.product_color}>
                        <span>{color}</span>
                        <div className={styles.product_color_circle} style={{background: colorsList[color]}}></div>
                    </div>
                    <div className={styles.product_send_type}>
                        <span>ارسال با پست پیشتاز</span>
                        <Img name='truck.svg' />
                    </div>
                    {
                        offPercent &&
                        <div className={styles.product_off}>
                            <span>{offPercent}% تخفیف</span>
                            <Img name="special-product-off.svg" alt='%' />
                        </div>
                    }
                    <div className={styles.counter_container}>
                        <button className={`${styles.counter_container_btn} ${isAddedToCart ? styles.incart : ''}`} onClick={handleAddTOCart}>{`${ isAddedToCart ? 'رفتن به  سبد خرید' :'افزودن به سبد خرید'}`}</button>
                        <div className={styles.counter_container_right}>
                            <div className={styles.product_price}>
                                <div>تومان</div>
                                <div>{totalPrice.toLocaleString()}</div>
                            </div>
                            <div className={styles.counter}>
                                <div 
                                    className={styles.product_count_dec}
                                    onClick={handleDecCount}
                                    style={count <= 1 ? {pointerEvents: 'none', color: 'rgba(30,30,30,0.3'} : {}}
                                >-</div>
                                <div className={styles.product_count}>{count}</div>
                                <div 
                                    className={styles.product_count_inc}
                                    onClick={handleIncCount}
                                >+</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.product_images}>
                    <img src={`${HOMEPAGE}/images/product-image-${selectedImage}.png`} alt="Product-image" className={`${styles.product_main_image} ${styles.animate_main_image}`} ref={productMainImage} />
                    <div className={styles.product_minor_images}>
                        {
                            [1,2,3,4].map(num => <Img name={`product-image-${num}.png`} cls={`${styles.product_minor_image} ${selectedImage === num ? styles.selected_image : ''}`} onClick={event => setSelectedImage(num)} key={`pim${num}x`} />)
                        }
                    </div>
                </div>
            </div>

            <SpeciaProductSimilarsList cls={styles.similars} />
            <Comments />
        </div>
    )
}

export default Product
