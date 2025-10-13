import ChildrenCard from "./ChildrenCard"

type ImageCardProps = {
    src: string,
    alt: string

    to?: string
    ariaLabel?: string
    overlay?: string
}

export default function ImageCard(props: ImageCardProps) {


    return (
        <ChildrenCard className={props.overlay ? 'popular_category' : 'introduction_image'} to={props.to} ariaLabel={props.ariaLabel}>
            <img src={props.src} alt={props.alt}/>
            {props.overlay && <>
                <div className="popular_category_overlay"></div>
                <p className="category_text card">{props.overlay}</p>
            </>}
        </ChildrenCard>
    )
}