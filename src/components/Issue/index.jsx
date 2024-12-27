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
    // console.log(dayArr, result)

    const checkisweekend = (index)=>{
        return !!['Sat', 'Sun'].includes(dayArr?.[index]?.dayName || '');
    }

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
                                    item.logged.map((current, index) => {
                                        const isweenkend = checkisweekend(index)
                                        return(
                                            <td className={isweenkend ? styles.nowork: ''}>{isweenkend ? '' : (current || '')}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}