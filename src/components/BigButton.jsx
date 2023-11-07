import styles from './BigButton.module.css'

function BigButton({text='تایید', fontSize='2rem', color='var(--primary-color)', onClick=''}) {
    return (
        <button className={styles.finish_btn} style={{fontSize: fontSize, backgroundColor: color}} onClick={onClick}>{text}</button>
    )
}

export default BigButton
