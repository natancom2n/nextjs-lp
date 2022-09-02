import Home from "../../pages/home"
import About from "../../pages/about"
import Portifolio from "../../pages/portifolio"
import Topo from "./Topo"

interface LayoutProps {

    children?: any
}

export default function Layout(props: LayoutProps) {

    return (
        <div>
            <div className={`
                flex flex-col 
               h-screen
            `}>
                <Topo />
                <Home />

            </div>
            <div>
                <About />
            </div>
            <div>
                <Portifolio />
            </div>
        </div>


    )

}