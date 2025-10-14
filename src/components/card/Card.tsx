import ChildrenCard from "./ChildrenCard"
import ImageCard from "./ImageCard"
import PostCard from "./PostCard"

interface CardProps {
    image?: string
    alt?: string
    title?: string
    data?: string
    category?: string
    id?: string
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
            return <PostCard image={props.image} alt={props.alt || ''} title={props.title} data={props.data} category={props.category} duration={props.duration} to={props.to} ariaLabel={props.ariaLabel} id={props.id}/>;
        }
        return <ImageCard src={props.image} alt={props.alt || ''} to={props.to} ariaLabel={props.ariaLabel} overlay={props.overlay}/>;
    }

    if(props.text) {
        return <ChildrenCard className="category" to={props.to} ariaLabel={props.ariaLabel ? props.ariaLabel : props.text}>{props.text}</ChildrenCard>;
    }

    return <div className="card">Esse card não está funcionando corretamente.</div>
}