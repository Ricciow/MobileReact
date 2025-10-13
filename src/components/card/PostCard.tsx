import ChildrenCard from "./ChildrenCard"

type PostCardProps = {
    image?: string
    alt?: string
    title?: string
    data?: string
    category?: string
    duration?: string
    to?: string
    ariaLabel?: string
    id?: string;
}

export default function PostCard(props: PostCardProps) {
    return (
        <ChildrenCard to={props.to} ariaLabel={props.ariaLabel} ariaLabeledby={props.id}>
            <article className="top_post card">
                <div className="post_image">
                    <img src={props.image} alt={props.alt}/>
                </div>
                <div className="post_texts">
                    <p>{props.data} &bullet; {props.category}</p>
                    <h3 id={props.id}>{props.title}</h3>
                    {props.duration && <p>{props.duration}</p>}
                </div>
            </article>
        </ChildrenCard>
    )
}