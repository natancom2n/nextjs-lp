import Logo from './Logo'
import MenuItem from './MenuItem'

export default function Menu(){


    return (

         <aside className=" flex justify-between w-3/4">
            <Logo dark={true} />

            <div>
                <ul className="flex justify-between space-x-10 items-center h-full">
                    <MenuItem home = {true} url ="/"  texto="Home" />
                    <MenuItem url ="About"  texto="About" />
                    <MenuItem url ="#"  texto="Portifolio" />
                    <MenuItem url ="#"  texto="Services" />
                    <MenuItem url ="#"  texto="Contact" />
                </ul>
            </div>
          </aside> 

    )
}