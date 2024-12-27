import styles from './styles.module.scss'
export default function Input({placeholder}){
    return(
        <input className={styles.input} type='text' placeholder={placeholder} />
    )
}