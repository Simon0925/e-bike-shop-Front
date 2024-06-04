import styles from './HeaderBaner.module.scss';



export default function HeaderBaner () {

    return(  
        <div className={styles['wrap']}>
            <div className={styles['container']}>
                
               <section className={styles['content']} >
                    <span className={styles['title']}>Introducing the all new HYBE</span>
                    <span className={styles['title2']}>OWN ANY GROUND</span>
                <div className={styles['btn-container']}>
                    <a>
                        Learn more
                    </a>
                </div>
               </section>
                   
              
            </div>
            
        </div>
    )
}