import styles from './styles.module.scss'
import Button from '../Button'
import Input from '../Input'
export default function Search({position, placeholder}){
    return(
        <div className={`${styles.search} ${position ? styles.search__right : ''}`}>
            <Button><span className={`icon mr-5 ${styles.search__icon}`} /></Button>
            <Input placeholder={placeholder} />
        </div>
    )
}