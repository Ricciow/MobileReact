import imagemSearch from '../assets/search.svg'

type SearchBoxProps = {
    url: string
}

export default function SearchBox({ url }: SearchBoxProps) {
    return(
        <form  action={url} className="search card" method="GET" role="search" aria-label="Pesquisar no site">
            <input type="text" placeholder="Pesquisar..." name="q" className="input search_input" />
            <button type="submit" className="search_button" aria-label="Buscar" >
                <img src={imagemSearch} alt="buscar" className="search_icon"/>
            </button>
        </form>
    )
}