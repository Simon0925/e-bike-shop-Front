import CardMenu from '../CardMenu/CardMenu';
import styles from './ElectricBikesDropdown.module.scss';

import montaine from './img/Haibike-MY21-Category-Entry-eMTB.png'


export default function ElectricBikesDropdown () {

    const items = ['Electric Mountain Bikes','Electric Trekking Bikes','All Electric Bikes']


    return(
        <>
            <div className={styles.wrap}> 
                {items.map(elem => (
                     <CardMenu text={elem} photo={montaine} />
                ))}
            </div>
        </>
    )
}