import styles from './AboutHeibikeDropDown.module.scss';




export default function AboutHeibikeDropDown () {


    return(
        <>
        <div>
        <>
        <div className={styles['wrap']}>
            <ul>
                <li>
                    <a>
                    We are ePerformance 
                    </a>
                </li>
                <li>
                    <a>
                    Haibike Heroes 
                    </a>
                </li>
                <li>
                    <a>
                    Awards
                    </a>
                </li>
                <li>
                    <a>
                    Family Series 
                    </a>
                </li>
                <li>
                    <a>
                    History
                    </a>
                </li>
                <li>
                    <a>
                    Stories
                    </a>
                </li>
            </ul>
            <div className={styles['section']}>
                <span>Technology</span>
            <ul>
                <li>
                    <a>
                    Yamaha PW-X2
                    </a>
                </li>
            </ul>
        </div>
        </div>
        
        </>
        </div>
        </>
    )
}