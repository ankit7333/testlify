import { NavLink } from "react-router-dom";
import styles from './styles.module.scss'
import Button from '../../ui/Button'
const menu = ['Your work', 'Projects', 'Filters', 'Dashboard', 'People', 'Apps']
export default function Nav({isNav}){
    return(
        <nav className={`${styles.nav} ${isNav ? styles.nav__active : ''}`}>
            <ul>
                {menu.map((value, index) => <li key={index}><NavLink to={`/${value.replace(/ /g, '')}`} title={`Navigate to ${value}`} >{value}</NavLink></li>)}
            </ul>
            <Button type="primary">Create</Button>
        </nav>
    )
}