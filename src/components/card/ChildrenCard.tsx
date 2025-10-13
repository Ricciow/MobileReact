import { Link } from "react-router-dom"

type ChildrenCardProps = {
    admin?: boolean,
    to?: string
    ariaLabel?: string
    className?: string
    ariaLabeledby?: string

    children: React.ReactNode
}

export default function ChildrenCard(props: ChildrenCardProps) {
    const className = props.admin ? 'card_admin' : 'card' + (props.className ? ' ' + props.className : '')

    if(props.to) {
        return (
            <Link className={className} to={props.to} aria-label={props.ariaLabel} aria-labelledby={props.ariaLabeledby}>{props.children}</Link>
        )
    }
    return (
        <div className={className}>{props.children}</div>
    )
}