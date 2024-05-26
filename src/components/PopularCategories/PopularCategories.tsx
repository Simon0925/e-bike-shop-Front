import styles from './PopularCategories.module.scss';



export default function PopularCategories () {
    return(
        <div className={styles['wrap']}>
            <div className={styles['line']}></div>
            <h2 className={styles['title']}>POPULAR CATEGORIES</h2>
        </div>
    )
}