import { useContext, useEffect, useState } from 'react'
import Dropdown from '../components/Dropdown'
import Img from '../components/Img'
import OffProductCard from '../components/OffProductCard'
import VerticalLine from '../components/VerticalLine'
import styles from './MainPage.module.css'
import { ProductsContext } from '../Contexts/Context'
import { useSearchParams } from 'react-router-dom'

function MainPage() {

    const [filters, setFilters] = useState('');
    const [groupings, setGroupings] = useState(0);
    const [sorts, setSorts] = useState({});
    const [reverseSort, setReverseSort] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();

    const pageNum = searchParams.get('page') ? searchParams.get('page') : 1;

    const {products} = useContext(ProductsContext);

    const selectedProducts = products.slice(pageNum * ( 6), pageNum * 6 + 6);

    let filteredProducts = selectedProducts
    // filters
    .filter(product => filters.country ? product.country === filters.country : product)
    .filter(product => filters.todaySend ? product.sendDelay === 1 : product)
    .filter(product => filters.left ? !!product.left : product)
    .filter(product => filters.offered ? !!product.offPercent : product)
    
    // groupings
    .filter(product => groupings ? product.type == groupings : product)

    // sortings
    .sort((product1, product2) => {
        if (sorts === 'price'  || sorts === 'sells' || sorts === 'stars' ) return product2[sorts].toFixed(1).localeCompare(product1[sorts].toFixed(1))
    })

    useEffect(()=>{console.log(selectedProducts);}, [selectedProducts])

    filteredProducts = !!reverseSort ? filteredProducts.reverse() : filteredProducts

    useEffect(function () {
        console.log(filteredProducts);
    }, [filters])

    const pagesToSelect = Number(pageNum) * 6 > products.length - 12
    ? [Number(pageNum) - 3, Number(pageNum) - 2, Number(pageNum)]
    : Number(pageNum) * 6 < 12
    ? [Number(pageNum), Number(pageNum) + 2, Number(pageNum) + 3]
    : 
    [Number(pageNum), Number(pageNum) + 2, Number(pageNum) + 3]

    const countries = [
        {
            name:'آمریکا',
            image: 'usa.png'
        },
        {
            name:'آلمان',
            image: 'germany.png'
        },
        {
            name:'فرانسه',
            image: 'france.png'
        },
        {
            name:'انگلیس',
            image: 'britain.png'
        }
    ]

    function handleClickGroupings(group) {
        if (group === groupings) setGroupings(0);
        else setGroupings(group)
    }

    function handleFilterSendToday(event) {
        setFilters(cur => {
            return{...cur, todaySend: event.target.checked};
        })
    }

    function handleFilterLeft(event) {
        setFilters(cur => {
            return{...cur, left: event.target.checked};
        })
    }

    function handleFilterOff(event) {
        setFilters(cur => {
            return{...cur, offered: event.target.checked};
        })
    }

    function handleFilterCountry(country) {
        setFilters(cur => {
            return{...cur, country};
        })
    }

    function handleUnableFilters(event) {
        setFilters({})
    }

    function sortSortStars(event) {
        setSorts('stars');
    }

    function sortSortPrice(event) {
        setSorts('price')
    }

    function sortSortSells(event) {
        setSorts('sells');
    }

    function handleToggleReveseSort(event) {
        setReverseSort(cur => !cur);
    }

    function handleGotonextClick(event) {
        if ((pageNum * 6) >= products.length - 7) return
        setSearchParams({page: Number(pageNum) + 1})
    }

    function handleGotoprevClick(event) {
        if (pageNum <=  1 ) return
        setSearchParams({page: Number(pageNum) - 1})
    }

    function handleGotoX(x) {
        setSearchParams({page: x})
    }

    return (
        <div className={styles.container}>
            <div className={styles.grouping}>
                <div className={styles.groups}>
                    <div className={`${styles.group} ${groupings === 'clothes' ? styles.active : ''}`} onClick={() => handleClickGroupings('clothes')}>لباس</div>
                    <div className={`${styles.group} ${groupings === 'beauty' ? styles.active : ''}`}  onClick={() => handleClickGroupings('beauty')}>محصولات آرایشی</div>
                    <div className={`${styles.group} ${groupings === 'accessoires' ? styles.active : ''}`}  onClick={() => handleClickGroupings('accessoires')}>اکسسوری</div>
                </div>
                <VerticalLine sizey='40px' color='#C8C5C5' />
                <div className={styles.grouping_title}>
                    دسته بندی کالاها
                </div>
            </div>
            <main className={styles.main}>
                <div className={styles.left_side}>
                    <div className={styles.sorts}>
                        <div className={styles.sort_options}>
                            <div className={styles.sort_option_minor}>
                                <input type='checkbox' onClick={handleToggleReveseSort} checked={!!reverseSort} />
                                <span>از پایین به بالا</span>
                            </div>
                            <div className={styles.sort_options_main}>
                                <div className={`${styles.sort_option} ${sorts === 'stars' ? styles.selected : ''}`} onClick={sortSortStars}>رضایت مشتریان</div>
                                <div className={`${styles.sort_option} ${sorts === 'price' ? styles.selected : ''}`} onClick={sortSortPrice}>قیمت</div>
                                <div className={`${styles.sort_option} ${sorts === 'sells' ? styles.selected : ''}`} onClick={sortSortSells}>میزان فروش</div>
                            </div>
                        </div>
                        <VerticalLine sizey='50px' color='rgba(0,0,0,0.5)' cls={styles.vertical_line} />
                        <div className={styles.sorts_title}>
                            <span>مرتب سازی براساس</span>
                            <Img name='sort-by.svg' />
                        </div>
                    </div>
                    <div className={styles.products}>
                        {
                            filteredProducts.map(product => <OffProductCard product={product} bg='rgba(0, 0, 0, 0.25);' cls={styles.offcard} />)
                        }
                <div className={styles.page_controls}>
                    <button className={styles.button} onClick={handleGotoprevClick} disabled={pageNum == 1}>
                        <Img name='arrow.svg' />
                        <span>قبلی</span>
                    </button>
                    <VerticalLine  color='#C8C5C5' />
                    {
                        pagesToSelect.map(num => 
                            <div 
                            className={`${num == pageNum ? styles.active : ''} ${styles.pagenum_option}`}
                            onClick={() => handleGotoX(num)}>
                                {num}
                            </div>)
                    }
                    <VerticalLine color='#C8C5C5' />
                    <button className={styles.button} onClick={handleGotonextClick} disabled={(pageNum * 6) >= products.length - 7}>
                        <span>بعدی</span>
                        <Img name='arrow2.svg' />
                    </button>
                </div>
                    </div>
                </div>
                <div className={styles.filters}>
                    <div className={styles.filters_header}>
                        <div className={styles.del_filters} onClick={handleUnableFilters}>حذف فیلتر ها</div>
                        <div className={styles.filters_title}>فیلتر ها</div>
                    </div>
                    <Dropdown cls={styles.dropdown} data={{name: 'کشور', options: countries}} handler={handleFilterCountry} /> 
                    <div className={styles.checkbox_filter}>
                            <input type='checkbox' onChange={handleFilterSendToday} checked={filters.todaySend}/>
                            <div className={styles.checkbox_filter_main_title}>
                                <Img name='send-today-filter.svg'  />
                                <span>ارسال امروز</span>
                            </div>
                    </div>
                    <div className={styles.checkbox_filter}>
                            <input type='checkbox' onChange={handleFilterLeft} checked={filters.left}/>
                            <div className={styles.checkbox_filter_main_title}>
                                <Img name='only-lefts-filter.svg' />
                                <span>فقط کالاهای موجود</span>
                            </div>
                    </div>
                    <div className={styles.checkbox_filter}>
                            <input type='checkbox' onChange={handleFilterOff} checked={filters.offered}/>
                            <div className={styles.checkbox_filter_main_title}>
                                <Img name='only-offers-filter.svg' />
                                <span>فقط کالاهای با تخفیف</span>
                            </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainPage