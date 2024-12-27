import { useState } from 'react';
import styles from './styles.module.scss'
import Button from '../../ui/Button'
import Search from '../../ui/Search'
import { NavLink } from "react-router-dom";
import Nav from '../Nav'
import Profile from '../../ui/Profile'
export default function Header(){
    const [isNav, setIsNav] = useState(false);
    const handleNav = () => setIsNav(prev => !prev)
    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <Button onClick={handleNav}><span className={`icon ${styles.hamburger}`} /></Button>
                <NavLink className={styles.logo} >
                    <img src='/images/Jira.svg' alt='logo' />
                </NavLink>
                <Nav isNav={isNav} />
            </div>
            <div className={styles.header__right}>
                <div className={styles.header__search}>
                    <Search placeholder={`Search`} />
                </div>
                <div className={styles.header__notify}>
                    <Button><span className={`icon ${styles.notify}`} /></Button>
                </div>
                <div className={styles.header__question}>
                    <Button><span className={`icon ${styles.questionmarkfill}`} /></Button>
                </div>
                <div className={styles.header__setting}>
                    <Button><span className={`icon ${styles.setting}`} /></Button>
                </div>
                <div className={styles.header__profile}>
                    <Profile isHeader={true} />
                </div>
            </div>
        </header>
    )
}
