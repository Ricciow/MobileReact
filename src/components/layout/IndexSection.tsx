type IndexSectionProps = {
    children: React.ReactNode;
    section: "introduction" | "popular_categories" | "categories" | "top_posts" | "editor_picks";
    ariaLabeledby?: string;
    title?: string;
    aside?: boolean;
}

export default function IndexSection(props: IndexSectionProps) {
    if(props.aside) {
        return( 
        <aside aria-labelledby={props.ariaLabeledby} className={props.section}>
            {(props.title && props.section != "introduction") && <h2 id={props.ariaLabeledby} className={"subtitle"}>{props.title}</h2>}
            {props.children}
        </aside>
        );
    }
    return( 
    <section aria-labelledby={props.ariaLabeledby} className={props.section}>
        {(props.title && props.section != "introduction") && <h2 id={props.ariaLabeledby} className={"subtitle"}>{props.title}</h2>}
        {props.children}
    </section>
    );
}