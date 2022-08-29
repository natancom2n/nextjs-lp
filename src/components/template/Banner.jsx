import styles from '../../styles/Banner.module.css'
import script from 'next/script'
import { useState } from 'react';
// import './bannerLoop'

export default function Banner() {

    //      var counter = 1;

    // const interval = setInterval(function(){ 
    //             document.getElementById("radio" + counter).checked = true;
    //             counter++;
    //             if(counter > 3){
    //               counter = 1;
    //             }
    //           }, 1000);


    return (
        <div className={styles.slider}>
            <div className={styles.slides}>

                <input type="radio" name="radioBtn" id={styles.radio1} />
                <input type="radio" name="radioBtn" id={styles.radio2} />
                <input type="radio" name="radioBtn" id={styles.radio3} />

                <div className={`${styles.slide} ${styles.first}`}>
                    <img src="./img/hero.svg" alt="" />

                </div>
                <div className={styles.slide}>
                    <img src="./img/logo-javascript.svg" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src="./img/html-1.svg" alt="" />
                </div>


                <div className={styles.navigationAuto}>
                    <div className={styles.autoBtn1}></div>
                    <div className={styles.autoBtn2}></div>
                    <div className={styles.autoBtn3}></div>

                </div>
            </div>

            <div className={styles.navigationManual}>
                <label for={styles.radio1} className={styles.manualBtn}></label>
                <label for={styles.radio2} className={styles.manualBtn}></label>
                <label for={styles.radio3} className={styles.manualBtn}></label>
            </div>
            {/* {interval} */}
        </div>

    )

}

{/* <div id = "ban1" className={`
banner bg-cover bg-center h-[420px] bg-no-repeat
w-[420px] bg-[url('/img/hero.svg')] rounded-2xl
`}> */}