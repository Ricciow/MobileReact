import { Link } from "react-router-dom"

type ButtonProps = {
    to?: string,
    onClick?: () => void
    inversed?: boolean
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    const className = `button${props.inversed ? '_inverse' : ''}`

    if(props.to) {
        return (
            <Link className={className} to={props.to}>{props.children}</Link>
        )
    }
    
    return (
        <button className={className} onClick={props.onClick}>{props.children}</button>
    )
}