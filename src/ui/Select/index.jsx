import styles from './styles.module.scss'
export default function Select({data, groupby = false}){
    return(
        <select className={`${styles.select} ${groupby ? styles.group : null}`}>
            {data.map((day, index) => <option key={index}>{day}</option>)}
        </select>
    )
}