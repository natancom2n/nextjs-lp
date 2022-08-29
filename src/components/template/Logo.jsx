

export default function(props){

    if(props.dark){
            return (
                <div className="flex cursor-pointer ">
                    <a href="/" className="flex h-9 ">
                        <img src="https://devman-react.vercel.app/img/logo/dark.png" alt="Logo da empresa" />
                    </a>
                </div>
            )
    }else{
        return (
            <div className="flex cursor-pointer ">
                <a href="/" className="flex h-9">
                     <img src="https://devman-react.vercel.app/img/logo/logo.png" alt="Logo da empresa" />
                </a>
            </div>
        )
    }
}