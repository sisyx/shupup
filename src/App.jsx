import { useContext, useEffect, useReducer, useState } from 'react'
import Input from './components/Input'
import Header from './components/Header';
import HomeCard from './components/HomeCard';
import OffProductCard from './components/OffProductCard';
import OffProducts from './pages/OffProducts';
import HomeLayout from './layouts/HomeLayout';
import ForgotPass from './pages/ForgotPass';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';
import { CardContext, LoginContext, ProductsContext } from './Contexts/Context';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import Payment from './pages/Payment';
import styles from './App.module.css';
import Cart from './pages/Cart';

const HOMEPAGE = "/shupup"

// reducers 

function cartReducer(state, action) {
  switch(action.type) {
    case 'addToCart': {
      return [...state, {count: action.payload.count, price: action.payload.price, image: action.payload.image, name: action.payload.name}]
    }
    case 'pay': {return  []};
    default: return state;
  }
}
function loginReducer(state, action) {
  switch (action.type) {
    case 'login': {
      return {username: action.payload.name, password: action.payload.password}
    }
    default: return state
  }
}

function productsReducer(state, action) {
  switch(action.type) {

    case 'sendComment': return state.map(product => {
      if (product.id === action.payload.id) {
        return {...product, comments: [...product.comments, {sender: action.payload.name, text: action.payload.text, replies: []}]}
      } else {
        return product;
      }
    })

    default: return state
  }
}


function App() {
  const [products, productsDispatch] = useReducer(productsReducer, useContext(ProductsContext))
  const [cart, cartDispatch] = useReducer( cartReducer,useContext(CardContext)) 
  const [login, loginDispatch] = useReducer(loginReducer, useContext(LoginContext))
  const [count, setCount] = useState(0);
  const {theme, setTheme} = useState('light');

  // scroll up
  function scrollFunction() {
    let mybutton = document.querySelector(`.${styles.search_gototop_btn}`);
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        mybutton.style.scale = "1";
    } else {
        mybutton.style.scale = "0";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(function () {
    window.onscroll = function() {scrollFunction()};

    return () => window.onscroll = () => {return 1}
  }, [])


  // save to localstorage
    // save cart
  useEffect(function () {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])
    // save login
  useEffect(function () {
    localStorage.setItem('login', JSON.stringify(login))
  },[login])
    // save products
    useEffect(function () {
      localStorage.setItem('products', JSON.stringify(products))
    },[products])

  return (
    <>
    <ProductsContext.Provider value={{products, productsDispatch}}>
      <CardContext.Provider value={{cart, cartDispatch}}>
        <LoginContext.Provider value={{login, loginDispatch}}>
          <Routes>
            <Route path={`${HOMEPAGE}/`} element={<HomeLayout />} />
            <Route path={`${HOMEPAGE}/forgot-pass`} element={<ForgotPass />} />
            <Route path={`${HOMEPAGE}/login`} element={<Login />} />
            <Route path={`${HOMEPAGE}/sign-up`} element={<Signup />} />
            <Route path={`${HOMEPAGE}/main`} element={<MainPage />} />
            <Route path={`${HOMEPAGE}/product`} element={<Product />} />
            <Route path={`${HOMEPAGE}/cart`} element={<Cart />} />
            <Route path={`${HOMEPAGE}/payment`} element={<Payment />} />
            <Route path={`${HOMEPAGE}/offs`} element={<OffProducts />} />
            <Route path='*' element={<h1>ERROR 404: Page Not Found</h1>} />
          </Routes>
        </LoginContext.Provider>
      </CardContext.Provider>
    </ProductsContext.Provider>
    <button onClick={topFunction} className={styles.search_gototop_btn} title="Go to top">Top</button> 
    </>
  )
}

export default App