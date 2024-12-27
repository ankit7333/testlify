import styles from './styles.module.scss'

export default function Button({children, type, onClick}){
    return(
        <button onClick={onClick} className={`${styles.button} ${styles[`button__${type}`]}`}>{children}</button>
    )
}