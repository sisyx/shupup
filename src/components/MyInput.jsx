import styles from './MyInput.module.css'
import { useRef, useState, useEffect } from 'react';


function MyInput({type='text',title='چیزی بنویسید', icon='', placeholder='مثل:او دیوانه است', cls='', active=false, fontSize='1rem', onchange=() => 1 } ) {

    const [isActive, setIsActive] = useState(false);

    const input = useRef();

    useEffect(function () {
        active ? input.current.focus() : ''
        return input.current.blur();
    }, [])

    return (
        <div className={`${styles.container} ${cls}`} style={{fontSize}}>
            {
            title &&  <div className={styles.title}>{title}:</div>
            }
            <div className={`${styles.input_n_icon} ${isActive ? styles.typing : ''}`}>
                
                {icon ? <img src={`/images/${icon}`} alt=">>" /> : null }
                <input type={type} placeholder={placeholder} className={styles.input} onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)} ref={input} onChange={ event => onchange(event)} />
            </div>
        </div>
    )
}

export default MyInput
