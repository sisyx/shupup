import { useContext } from 'react'
import Comment from './Comment'
import styles from './Comments.module.css'
import Img from './Img'
import MyInput from './MyInput'
import { ProductsContext } from '../Contexts/Context'
import { useParams, useSearchParams } from 'react-router-dom'

function Comments() {

    
    const [params, setParams] = useSearchParams();
    const product_id = params.get('id');
    const {products, productsDispatch} = useContext(ProductsContext);
    const selectedProduct = products.find(product => product.id === product_id);
    
    const {comments} = selectedProduct;
    
    function handleSendComment(event) {
        const name = document.querySelector('input').value;
        const email = document.querySelectorAll('input')[1].value;
        const text = document.querySelector('textarea').value;

        if (name && email && text) {
            productsDispatch({type: 'sendComment', payload: {id: product_id, name, text}})
            document.querySelector('input').value = '',
            document.querySelectorAll('input')[1].value = '';
            document.querySelector('textarea').value = '';
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                نظرات به این محصول
            </div>
            <div className={styles.comments}>
                {
                    comments.length &&
                    comments.map(comment => <Comment comment={comment} key={`comments.id${Math.floor(Math.random() * 10000)}`} />)
                }
            </div>
            <div className={styles.form}>
                <div>
                    <span>نظر شما</span>
                    <Img name='comment-us.svg' alt="(<_>)" />
                </div>
                <div className={styles.inputs}>
                    <div className={styles.text_place}>
                        <textarea/>
                    </div>
                    <div className={styles.inputs_main}>
                        <MyInput title='' placeholder='نام شما...' cls={styles.input} />
                        <MyInput title='' placeholder='ایمیل شما...' cls={styles.input} />
                        <button className={styles.send_comment_btn} onClick={handleSendComment}>ارسال نظر</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
