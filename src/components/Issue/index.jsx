import styles from './styles.module.scss'
import {getDaysOfMonth, generateArrayWithTotal} from '../../utils'
export default function Issue(){
    const dayArr = getDaysOfMonth()
    const result = [];
    // eslint-disable-next-line
    Array.from({length : 5}, (_, index) => {
        const count = 0+index + 1
        result.push(generateArrayWithTotal(dayArr, count))
    })
    const finalLogged = dayArr.map((_, i) =>
        result.reduce((sum, obj) => sum + obj.logged[i], 0)
    );
    const obj = {
        name: {
            name: "",
            type: 'Total',
          },
        logged: finalLogged,
        total: result.reduce((acc,cur)=>acc+cur.total,0),
    }
    result.push(obj)
    return(
        <div className={styles.issue}>
            <table>
                <thead>
                    <tr>
                        <th className={`${styles.sticky} ${styles.sticky__first}`}>Issue</th>
                        <th className={`${styles.sticky} ${styles.sticky__second}`}>Logged</th>
                        {
                            dayArr?.length && dayArr.map(value => {
                                return (<th>
                                    <span>{value.dayName}</span>
                                    <span className={value.isCurrentDay ? styles.currentday : ''}>{value.day}</span>
                                </th>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {result?.length && result.map(item => {
                        return (
                            <tr>
                                <td className={`${styles.sticky} ${styles.sticky__first}`}>
                                    {item.name.name ? <span className={`icon ${styles.issue__icon}`} /> : null}
                                    {item.name.name ? <span className={styles.issue__title}>{item.name.name}</span> : null}
                                    {item.name.type ? <span className={styles.issue__summery}>{item.name.type}</span> : null}
                                </td>
                                <td className={`${styles.sticky} ${styles.sticky__second}`}>{item.total}</td>
                                {
                                    item.logged.map(current => {
                                        return(
                                            <td>{current ? current : ''}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })}
                    {/* <tr>
                        <td className={`${styles.sticky} ${styles.sticky__first}`}>
                            <span className={`icon ${styles.issue__icon}`} />
                            <span className={styles.issue__title}>ATL-0011</span>
                            <span className={styles.issue__summery}>Issue summary</span>
                        </td>
                        <td className={`${styles.sticky} ${styles.sticky__second}`}>4.5</td>
                        <td>4.5</td><td>4.5</td><td>4.5</td><td></td><td></td>
                        <td></td><td>4.5</td><td>4.5</td><td>4.5</td><td></td><td></td>
                        <td></td><td>4.5</td><td>4.5</td><td>4.5</td><td className={styles.highlight}>4.5</td>
                        <td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr className={styles.issue__totals}>
                        <td className={`${styles.sticky} ${styles.sticky__first}`}>Total</td>
                        <td className={`${styles.sticky} ${styles.sticky__second}`}>73.75</td>
                        <td>4.5</td><td>4.5</td><td>4.5</td><td></td><td></td>
                        <td></td><td>4.5</td><td>4.5</td><td>4.5</td><td></td><td></td>
                        <td></td><td>4.5</td><td>4.5</td><td>4.5</td><td>4.5</td>
                        <td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}