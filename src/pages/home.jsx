import Script from 'next/script'
import { JsLogo } from '../components/svg/index'
import Banner from '../components/template/Banner'




export default function Home() {


    let fontTitle = "text-2xl text-white"
    let fontName = "text-6xl text-white"
    let fontP = "text-sm text-white"
    let stroke = "text-9xl text-[#6d91cf]/60 "
    //let stroke = "text-9xl"



    return (


        <div className={`
        flex justify-center items-center 
        font-bold
        bg-cover bg-center
        bg-[url('/img/image-1.jpeg')] h-screen
        `}>

            {/* <Script src="https://www.google-analytics.com/analytics.js" /> */}
            <div className="container flex w-full h-full">
                <div className={`
                    grid grid-cols-2 gap-5  
                    w-full h-full 
                    `} id="Home">

                    <div className="texto flex flex-col ">
                        <div className={`
                                flex flex-col pt-48 mx-32
                                  space-y-4 
                                `}>
                            <h3 className={`Hello ${fontTitle} `}>Hello I'm</h3>
                            <h3 className={`Hello ${fontName} `}>Natan Alves</h3>
                            <h3 className={`job ${fontTitle} pt-4`}>Web Developer from Curitiba</h3>
                            <p className={`text ${fontP} `}>Jodi kokhono vul hoye jai tumi oporadh
                                nio na ptate velit esse cillum dolore</p>
                        </div>
                        <h3 className={`${stroke}  absolute top-[110px] left-[-50px] 
                                             decoration-sky-500/30 
                                             `}>Natan</h3>

                        <h3 className={`${stroke} rotate-90 text-9xl 
                                            absolute bottom-[180px] left-[-100px] `}>Alves</h3>
                    </div>
                    <div className="main-banner h-full pt-32">
                        <Banner />
                        {/* <span className={`
                            logo-js absolute top-[135px] right-[550px]
                            `}>
                              {JsLogo}
                            </span> */}
                    </div>
                </div>

            </div>

            {/* <script type="text/javascript">

                setInterval(action, 1000);
            </script> */}
        </div>
    )

}