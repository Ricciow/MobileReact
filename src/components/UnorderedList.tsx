import { Children } from "react"

type UnorderedListProps = {
    ariaLabel?: string
    className?: string
    itemClassName?: string
    children?: React.ReactNode
}

export default function UnorderedList({ ariaLabel, className, itemClassName, children }: UnorderedListProps) {
    return (
        <ul className={className} aria-label={ariaLabel}>
            {Children.map(children, child => <li className={itemClassName}>{child}</li>)}
        </ul>
    )
}