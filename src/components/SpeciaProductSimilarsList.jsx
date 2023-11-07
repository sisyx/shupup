import { useContext } from 'react'
import OffProductCard from './OffProductCard'
import styles from './SpeciaProductSimilarsList.module.css'
import { ProductsContext } from '../Contexts/Context'

// const offProducts = [
//     {
//         id: 'offP1',
//         description: 'لباس بچه گانه',
//         price: 590000,
//         offPercent: 20,
//         stars: 4,
//         imageSrc: '/images/offProductCard.png',
//         left: 0,
//     },
//     {
//         id: 'offP2',
//         description: 'کلاه زمستانه',
//         price: 900000,
//         offPercent: 30,
//         stars: 3.4,
//         imageSrc: '/images/offProductCard.png',
//         left: 9,
//     },
//     {
//         id: 'offP3',
//         description: 'کفش اسپورت',
//         price: 13000,
//         offPercent: 55,
//         stars: 4.9,
//         imageSrc: '/images/offProductCard.png',
//         left: 0,
//     },
//     {
//         id: 'offP4',
//         description: 'سیسمونی نوزاد',
//         price: 6000000,
//         offPercent: 12,
//         stars: 4.1,
//         imageSrc: '/images/offProductCard.png',
//         left: 3,
//     },
//     {
//         id: 'offP5',
//         description: 'دستکش زنانه',
//         price: 70000,
//         offPercent: 10,
//         stars: 2.1,
//         imageSrc: '/images/offProductCard.png',
//         left: 8,
//     },
//     {
//         id: 'offP6',
//         description: 'پیراهن دخترانه',
//         price: 75000,
//         offPercent: 40,
//         stars: 5,
//         imageSrc: '/images/offProductCard.png',
//         left: 11
//     },
//     {
//         id: 'offP7',
//         description: 'لباس زنانه برای  همه سنین',
//         price: 200000,
//         offPercent: 75,
//         stars: 3.6,
//         imageSrc: '/images/offProductCard.png',
//         left: 3,
//     },
// ]

function SpeciaProductSimilarsList({cls=''}) {
    const offProducts = useContext(ProductsContext).products;
    const availableProducts = offProducts.map(product => product.left >= 1 ? product : 0)
    .filter(item => item.id)
    return (
        <div className={`${styles.container} ${cls}`}>
            <div className={styles.title}>محصولات مشابه</div>
            <div className={styles.images_container}>
                {
                    availableProducts.slice(0,3)
                    .map(product => <OffProductCard cls={styles.card} product={product} bg='rgb(230,230,230)' key={Math.floor(Math.random() * 10000)} /> )
                }
            </div>
        </div>
    )
}

export default SpeciaProductSimilarsList
