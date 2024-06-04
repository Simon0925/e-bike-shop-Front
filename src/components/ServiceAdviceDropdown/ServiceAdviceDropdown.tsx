import styles from './ServiceAdviceDropdown.module.scss';



export default function ServiceAdviceDropdown () {
    return(
        <>
        <div className={styles['wrap']}>
            <ul>
                <li>
                    <a>
                        Return
                    </a>
                </li>
                <li>
                    <a>
                        Delivery
                    </a>
                </li>
                <li>
                    <a>
                        Contact Us
                    </a>
                </li>
                <li>
                    <a>
                        Cycle to Work Scheme
                    </a>
                </li>
                <li>
                    <a>
                        Frequently Asked Questions
                    </a>
                </li>
            </ul>
            <div className={styles['section']}>
                <span>Electric Bike Knowledge</span>
            <ul>
                <li>
                    <a className={styles['']}>
                     Hardtail vs. Full Suspension 
                    </a>
                </li>
                <li>
                    <a>
                    Which eBike is best for you?
                    </a>
                </li>
            </ul>
        </div>
        </div>
        
        </>
    )
}