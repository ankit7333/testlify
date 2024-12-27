import modal from '../../styles/modal.module.scss'
import styles from './styles.module.scss'
import Button from '../../ui/Button'
import Search from '../../ui/Search'
export default function Logtime({title, handleModal}){
    return(
        <div onClick={handleModal} className={`${modal.modal__overlay}`}>
            <div onClick={(e) => e.stopPropagation()} className={`${modal.modal}`}>
                <header className={`${modal.modal__header} `}>{title}</header>
                <div className={`${modal.modal__body} ${styles.modal__body}`}>
                    <Search position={true} placeholder={`Search issues`} />
                    <div className={styles.datetime}>
                        <div>
                            <input placeholder='06/Sep/24' type='text' />
                            <span className={`icon ${styles.date}`} />
                        </div>
                        <div>
                            <input placeholder='0h' type='text' />
                            <span className={`icon ${styles.time}`} />
                        </div>
                    </div>
                    <div className={styles.description}>
                        <input placeholder='Description' type='text' />
                        <span className={`icon ${styles.description__icon}`} />
                    </div>
                </div>
                <footer className={`${modal.modal__footer}`}>
                    <Button onClick={handleModal} type='secondary'>Cancel</Button>
                    <Button onClick={handleModal} type='primary'>Log time</Button>
                </footer>
            </div>
        </div>
    )
}