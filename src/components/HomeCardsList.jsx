import HomeCard from "./HomeCard";
import styles from './HomeCardsList.module.css';

const cards = [
    {
        id: 'hcard1',
        text: 'محصولات گیمینگ',
        imageSrc: '/images/homeCard.png',
    },
    {
        id: 'hcard2',
        text: 'محصولات ورزشی',
        imageSrc: '/images/homeCard.png',
    },
    {
        id: 'hcard3',
        text: 'محصولات بچه گانه',
        imageSrc: '/images/homeCard.png',
    },
    {
        id: 'hcard4',
        text: 'محصولات آشپرخانه',
        imageSrc: '/images/homeCard.png',
    },
    {
        id: 'hcard5',
        text: 'مبلمان',
        imageSrc: '/images/homeCard.png',
    },
    {
        id: 'hcard6',
        text: 'فرش و قالی',
        imageSrc: '/images/homeCard.png',
    },
    {
        id: 'hcard7',
        text: 'محصولات تزیینی',
        imageSrc: '/images/homeCard.png',
    },
    {
        id: 'hcard8',
        text: 'محصولات آرایشی',
        imageSrc: '/images/homeCard.png',
    },
    {
        id: 'hcard9',
        text: 'محصولات بهداشتی',
        imageSrc: '/images/homeCard.png',
    },
    {
        id: 'hcard10',
        text: 'محصولات زنانه',
        imageSrc: '/images/homeCard.png',
    },
    {
        id: 'hcard11',
        text: 'محصولات مردانه',
        imageSrc: '/images/homeCard.png',
    },
    {
        id: 'hcard12',
        text: 'لوازم نوشتازی',
        imageSrc: '/images/homeCard.png',
    },

]
function HomeCardsList() {
    return (
        <div className={styles.container}>
            {
                cards.map(card => <HomeCard card={card} key={card.id} />)
            }
        </div>
    )
}

export default HomeCardsList
