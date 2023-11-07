import { useState } from 'react'
import styles from './Dropdown.module.css'
import Img from './Img';

function Dropdown({data, handler, cls}) {
    const [isOpen, setIsOpen] = useState(0);
    const [selectedOption, setSelectedOPtion] = useState(0)
    const {name, options} = data;

    function toggleIsOpen(event) {
        setIsOpen(cur => !cur);
    }

    return (
        <div className={`${styles.filters_dropdown} ${cls} ${isOpen ? styles.open : ''}`}>
            <div className={styles.filters_dropdown_title} onClick={toggleIsOpen}>
                <Img name="dropdown-arrow.svg" alt='^' />
                <div className={styles.filters_dropdown_title_text}>{name}</div>
            </div>
            <div className={styles.filters_dropdown_options}>
                {
                    options.map((option, index) => (
                        <div 
                            className={`${styles.filters_dropdown_option} ${selectedOption === index + 1 ? styles.selected_option : ''}`} 
                            onClick={() => {
                                handler(option.name)
                                setSelectedOPtion(index + 1)
                            }}>
                            <Img name={option.image} />                                
                            <span>{option.name}</span>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Dropdown
