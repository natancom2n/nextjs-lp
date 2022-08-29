import styles from '../../styles/Banner.module.css'
import Script from 'next/script'
// import './bannerLoop'

export default function Banner(){

    return (
        <div className={styles.slider}>
            <div className={styles.slides}>
                 
                <input type="radio" name="radioBtn" id={styles.radio1}/>
                <input type="radio" name="radioBtn" id={styles.radio2}/>
                <input type="radio" name="radioBtn" id={styles.radio3}/>

                <div className={`${styles.slide} ${styles.first}`}>
                    <img src="./img/hero.svg" alt=""/>
                   
                </div>
                <div className={styles.slide}>
                    <img src="./img/logo-javascript.svg" alt=""/>
                </div>
                <div className={styles.slide}>
                    <img src="./img/html-1.svg" alt=""/>
                </div>
 

                <div className={styles.navigationAuto}>
                    <div className={styles.autoBtn1}></div>
                    <div className={styles.autoBtn2}></div>
                    <div className={styles.autoBtn3}></div>
        
                </div>
            </div>
      
            <div className="navigation-manual">
                <label for={styles.radio1} className="manualBtn"></label>
                <label for={styles.radio2} className="manualBtn"></label>
                <label for={styles.radio3} className="manualBtn"></label>
            </div>
      </div>
        
    )

}
       
{/* <div id = "ban1" className={`
banner bg-cover bg-center h-[420px] bg-no-repeat
w-[420px] bg-[url('/img/hero.svg')] rounded-2xl
`}> */}