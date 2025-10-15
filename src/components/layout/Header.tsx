import imagemMenu from '../../assets/menu.svg'
import imagemClose from '../../assets/close.svg'
import imagemSearch from '../../assets/search.svg'
import imagemUser from '../../assets/user.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SearchBox from '../searchBox'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    function handleClick() {
        setMenuOpen(!menuOpen)
    }

    return(
        <header>
            <h1 className="logo"><Link to="./index.html" aria-label="Ir para a home" className="logo_link">HABIT</Link></h1>

            <nav className="header_nav" aria-label="Menu principal">
                <Link to="./newsletter.html" className="header_link">Assinar</Link>
                <button className={`menu_button ${menuOpen ? 'ativo' : ''}`} aria-label="Abrir Menu" aria-expanded="false" aria-controls="header_menu" id="menu_hamburguer" onClick={handleClick}>
                    <img src={imagemMenu} alt="menu" className="menu_icon"/>
                    <img src={imagemClose} alt="fechar_menu" className="close_menu_icon"/>
                </button>
                <ul id="header_menu" className="header_menu">
                    <li><Link to="./index.html" className="header_link">Início</Link></li>
                    <li><Link to="#" className="header_link">Páginas</Link></li>
                    <li><Link to="./categories.html?category=Destaques" className="header_link">Destaques</Link></li>
                    <li><Link to="./administrator-page-category.html" className="header_link">Admin</Link></li>
                    <li><Link to="./login.html" className="header_link profile_link_menu">Perfil</Link></li>
                    <li><Link to="./posts.html" className="header_link">Posts</Link></li>
                </ul>
            </nav>

            <div className="search_area">
                <SearchBox url="./busca.html"/>
            </div>

            <Link to="./login.html" aria-label="Acessar seu perfil" className="profile_link">
                <img src={imagemUser} alt="Foto do perfil"/>
            </Link>
        </header>
    )
}