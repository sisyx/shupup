import { useContext, useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import Input from './Input';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext, ProductsContext } from '../Contexts/Context';
import { HOMEPAGE } from '../App';


function Header() {
    const [isSearching, setIsSearching] = useState(0);
    const searchInput = useRef();
    const navigate = useNavigate();
    const {login} = useContext(LoginContext);
    const {products} = useContext(ProductsContext);
    const [searchFoundsList, setSearchFoundsList] = useState([])

    function toggleIsSearching() {
        setIsSearching(cur => cur === 1 ? 0 : 1);Header
    }
    // if  (isSearching) document.querySelector(`.${styles.search_input}`).focus()

    function handleSearch(event) {
        setSearchFoundsList(() =>[])
        const query = searchInput.current.value;

        products.forEach(product => {
            if (product.name.includes(query)) {
                setSearchFoundsList(cur => [...cur, product]);
            }
        })
    }

    // useEffect(() => console.log(searchFoundsList), [searchFoundsLists])

    return (
        <header className={`${styles.header} ${isSearching ? styles.space_between : ''}`}>
             {/* drop size: 400px */}
             <div className={styles.drop_4}>
                    <div className={styles.drop_title}>
                        <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="3" fill="#272727"/>
                            <rect y="7" width="32" height="3" fill="#272727"/>
                            <rect y="14" width="32" height="3" fill="#272727"/>
                        </svg>
                    </div>
                    <div className={styles.drop_hidden}>
                        <div className={styles.center_item}>
                            ضفحه اصلی
                        </div>
                        <div className={styles.center_item}>
                            درباره ما
                        </div>
                        <div className={styles.center_item}>
                            محصولات
                        </div>
                        <div className={styles.center_item}>
                            برای شما
                        </div>
                        <div className={styles.center_item}>
                            آمد و رفت
                        </div>
                    </div>
                </div>


            <div className={styles.left}>
                <div className={`${styles.logo} ${isSearching ? styles.hidden : ''}`}>
                    <img src={`${HOMEPAGE}/public/images/Logo.png`} alt="LOGO" className={styles.logo} />
                </div>
                <label className={`${styles.search} ${isSearching ? styles.active_search : ''}`}>
                    <svg className={styles.search_icon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="currentcolor" onClick={toggleIsSearching}>
                        <path d="M12.5718 3C7.28006 3 3 7.18195 3 12.3524C3 17.5229 7.28006 21.7049 12.5718 21.7049C14.4611 21.7049 16.2097 21.1633 17.6921 20.2436L24.607 27L27 24.6619L20.173 18.0086C21.4003 16.4355 22.1437 14.4864 22.1437 12.3524C22.1437 7.18195 17.8636 3 12.5718 3ZM12.5718 5.20057C16.6254 5.20057 19.8915 8.39183 19.8915 12.3524C19.8915 16.313 16.6254 19.5043 12.5718 19.5043C8.51833 19.5043 5.2522 16.313 5.2522 12.3524C5.2522 8.39183 8.51833 5.20057 12.5718 5.20057Z" fill="currentcolor"/>
                    </svg>
                    <input className={`${styles.search_input} id="searchinput" ${isSearching ? '' : styles.hidden}`} placeholder='Search' onBlur={() => setTimeout(toggleIsSearching, 200)} onChange={handleSearch} ref={searchInput} />
                    {
                        isSearching &&
                        <div className={`${styles.search_results} ${isSearching ? styles.active : ''}`}>
                            {
                                searchFoundsList.length
                                ? searchFoundsList.map(product => 
                                    <Link className={styles.search_result} onClick={() => navigate(`${HOMEPAGE}/product?id=${product.id}`)} to={`/product?id=${product.id}`} key={`search-pro-${product.id}`}>
                                        <span>{product.name} </span>
                                        <span>{product.price.toLocaleString()} تومان   </span>    
                                    </Link>
                                    )
                                : <div>موردی یافت نشد</div> 
                            }
                        </div>
                    }
                </label>
            </div>
            <div className={`${styles.center} ${isSearching ? styles.hidden : ''}`}>
                {/* drop size: 900px */}
                <div className={styles.drop_1}>
                    <div className={styles.drop_title}>
                        <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="3" fill="#272727"/>
                            <rect y="7" width="32" height="3" fill="#272727"/>
                            <rect y="14" width="32" height="3" fill="#272727"/>
                        </svg>
                    </div>
                    <div className={styles.drop_hidden}>
                        <div className={styles.center_item}>
                            ضفحه اصلی
                        </div>
                        <div className={styles.center_item}>
                            درباره ما
                        </div>
                    </div>
                </div>

                {/* drop size: 700px */}
                <div className={styles.drop_2}>
                    <div className={styles.drop_title}>
                        <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="3" fill="#272727"/>
                            <rect y="7" width="32" height="3" fill="#272727"/>
                            <rect y="14" width="32" height="3" fill="#272727"/>
                        </svg>    
                    </div>
                    <div className={styles.drop_hidden}>
                        <div className={styles.center_item}>
                            ضفحه اصلی
                        </div>
                        <div className={styles.center_item}>
                            درباره ما
                        </div>
                        <div className={styles.center_item}>
                            محصولات
                        </div>
                    </div>
                </div>

                {/* drop size: 500px */}
                <div className={styles.drop_3}>
                    <div className={styles.drop_title}>
                        <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="3" fill="#272727"/>
                            <rect y="7" width="32" height="3" fill="#272727"/>
                            <rect y="14" width="32" height="3" fill="#272727"/>
                        </svg>    
                    </div>
                    <div className={styles.drop_hidden}>
                        <div className={styles.center_item}>
                            ضفحه اصلی
                        </div>
                        <div className={styles.center_item}>
                            درباره ما
                        </div>
                        <div className={styles.center_item}>
                            محصولات
                        </div>
                        <div className={styles.center_item}>
                            برای شما
                        </div>
                    </div>
                </div>

               


                <div className={`${styles.center_item} ${styles.main_center_item1}`}>
                    ضفحه اصلی
                </div>
                <div className={`${styles.center_item} ${styles.main_center_item2}`}>
                    درباره ما
                </div>
                <div className={`${styles.center_item} ${styles.main_center_item3}`}>
                    محصولات
                </div>
                <div className={`${styles.center_item} ${styles.main_center_item4}`}>
                    برای شما
                </div>
                <div className={`${styles.center_item} ${styles.main_center_item5}`}>
                    آمد و رفت
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.support}>
                    <img src={`${HOMEPAGE}/images/support.svg`} alt="support" />
                </div>
                <Link className={styles.cart} to={`${HOMEPAGE}/main`}>
                    <img src={`${HOMEPAGE}/images/cart.svg`} alt="" />
                </Link>
                <div className={styles.vertical_line}></div>
                {
                    login.username 
                    ? <div className={styles.sign_up_in}>
                         <button className={styles.sign_up_in_btn}>{login.username}</button>
                      </div>
                    :
                    <div className={styles.sign_up_in}>
                        <button className={styles.sign_up_in_btn} onClick={() => navigate('/login')}>ورود یا ثبت نام</button>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header