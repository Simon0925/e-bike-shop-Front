import SearchSvg from '../../SVG/SearchSvg/SearchSvg'
import HeaderNavBar from '../../components/HeaderNavBar/HeaderNavBar'
import styles from './Header.module.scss'




export default function Header () {
    return (
        <>
            <div className={styles['wrap']}>
                <div className={styles['navigation']}>
                    <div className={styles['logo']}>
                        <a href='/'>E-BIKE</a>
                    </div>
                    <HeaderNavBar />
                    <SearchSvg />
                </div>
            </div>
        </>
    )
}