import styles from './styles.module.scss'
import Button from '../../ui/Button'
export default function Sidebar(){
    return(
        <div className={styles.sidebar}>
            <Button><span className={`icon ${styles.icon}`} /></Button>
            <Button><span className={`icon ${styles.overview}`} /></Button>
            <Button><span className={`icon ${styles.group}`} /></Button>
            <Button><span className={`icon ${styles.setting}`} /></Button>
        </div>
    )
}