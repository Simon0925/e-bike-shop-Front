import montaine from '../ElectricBikesDropdown/img/Haibike-MY21-Category-Entry-eMTB.png'
import CardMenu from '../CardMenu/CardMenu';
import styles from './PopularCategories.module.scss';



export default function PopularCategories () {
    const items = ['Electric Mountain Bikes','Electric Trekking Bikes','All Electric Bikes']
    return(
        <div className={styles['wrap']}>
            <div className={styles['line']}></div>
            <h2 className={styles['title']}>POPULAR CATEGORIES</h2>
            <div className={styles['container']}>
            {items.map(elem => (
                     <CardMenu text={elem} photo={montaine} />
                ))}
            </div>
        </div>
    )
}