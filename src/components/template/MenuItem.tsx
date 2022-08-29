



interface MenuItemProps {

    texto: string
    url: string
    home?: boolean

}

let color: string

export default function MenuItem(props: MenuItemProps) {
    if (props.home) {
        color = "text-blue-900 font-semibold"
    } else {
        color = "text-black font-semibold"
    }

    return (
        <li className={`${color} hover:text-[#ff4d42] `} ><a href={props.url}>{props.texto}</a></li>

    )
}