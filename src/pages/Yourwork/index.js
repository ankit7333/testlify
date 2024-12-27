import { useState } from 'react'
import styles from './styles.module.scss'
import Select from '../../ui/Select'
import Button from '../../ui/Button'
import Profile from '../../ui/Profile'
import Logtime from '../../components/Logtime'
import Date from '../../components/Date'
import Issue from '../../components/Issue'
const days = ['Days', 'Months', 'Years']
const groups = ['Issues', 'Issues 1', 'Issues 2', 'Issues 3']
export default function Home(){
    const [isModal, setIsModal] = useState(false)
    const handleModal = () => setIsModal(prev => !prev)
    return(
        <>
            <div className={styles.home__top}>
                <Profile />
                <div className={styles.home__right}>
                    <Select data={days} />
                    <Button onClick={handleModal} type="primary">Log time</Button>
                    <Button><span className={`icon ${styles.dot}`} /></Button>
                </div>
            </div>
            <div className={styles.home__middle}>
                <Date />
                <div className={styles.group}>
                    <label>Group by</label>
                    <Select groupby data={groups} />
                </div>
            </div>
            <Issue />
            {isModal && <Logtime handleModal={handleModal} title='Log Time' />}
        </>
    )
}