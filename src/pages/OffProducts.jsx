import { useContext } from "react";
import OffProductCard from "../components/OffProductCard";
import styles from './OffProducts.module.css';
import { ProductsContext } from "../Contexts/Context";

// const offProducts = [
//     {
//         id: 'offP1',
//         description: 'لباس بچه گانه',
//         price: 590000,
//         offPercent: 20,
//         stars: 4,
//         left: 0,
//     },
//     {
//         id: 'offP2',
//         description: 'کلاه زمستانه',
//         price: 900000,
//         offPercent: 30,
//         stars: 3.4,
//         left: 9,
//     },
//     {
//         id: 'offP3',
//         description: 'کفش اسپورت',
//         price: 13000,
//         offPercent: 55,
//         stars: 4.9,
//         left: 0,
//     },
//     {
//         id: 'offP4',
//         description: 'سیسمونی نوزاد',
//         price: 6000000,
//         offPercent: 12,
//         stars: 4.1,
//         left: 3,
//     },
//     {
//         id: 'offP5',
//         description: 'دستکش زنانه',
//         price: 70000,
//         offPercent: 10,
//         stars: 2.1,
//         left: 8,
//     },
//     {
//         id: 'offP6',
//         description: 'پیراهن دخترانه',
//         price: 75000,
//         offPercent: 40,
//         stars: 5,
//         left: 11
//     },
//     {
//         id: 'offP7',
//         description: 'لباس زنانه برای  همه سنین',
//         price: 200000,
//         offPercent: 75,
//         stars: 3.6,
//         left: 3,
//     },
// ]

function OffProducts() {

    const offProducts = useContext(ProductsContext).products
    .filter(product => product.offPercent > 10);

    return (
        <div className={styles.container}>
            {
                offProducts.map(product => <OffProductCard product={product} key={product.id} />)
            }
        </div>
    )
}

export default OffProducts
