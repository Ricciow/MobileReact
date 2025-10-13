import ChildrenCard from "./ChildrenCard"
import ImageCard from "./ImageCard"

interface CardProps {
    image?: string
    alt?: string
    title?: string
    description?: string
    duration?: string
    to?: string
    ariaLabel?: string
    overlay?: string
    admin?: boolean
    children?: React.ReactNode
    text?: string
}


export default function Card(props: CardProps) {
    if(props.children) {
        return <ChildrenCard admin={props.admin} to={props.to} ariaLabel={props.ariaLabel}>{props.children}</ChildrenCard> 
    }

    if(props.image) {
        if(props.title) {
            //Post
        }
        return <ImageCard src={props.image} alt={props.alt || ''} to={props.to} ariaLabel={props.ariaLabel} overlay={props.overlay}/>;
    }

    if(props.text) {
        return <ChildrenCard className="category" to={props.to} ariaLabel={props.ariaLabel}>{props.text}</ChildrenCard>;
    }

    return <div className="card">Esse card não está funcionando corretamente.</div>
}