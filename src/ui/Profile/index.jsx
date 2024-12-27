import styles from './styles.module.scss'
export default function Profile({isHeader = false}){
    return(
        <div className={styles.profile}>
            <img src="/images/profile.svg" alt='profile' />
            {!isHeader ? <span className={styles.profile__text}>Divya Shah</span> : null}
        </div>
    )
}