export default function Header() {
    return(
        <header>
            <h1 className="logo"><a href="./index.html" aria-label="Ir para a home" className="logo_link">HABIT</a></h1>

            <nav className="header_nav" aria-label="Menu principal">
                <a href="./newsletter.html" className="header_link">Assinar</a>
                <button className="menu_button" aria-label="Abrir Menu" aria-expanded="false" aria-controls="header_menu" id="menu_hamburguer">
                    <img src="./assets/menu.svg" alt="menu" className="menu_icon"/>
                    <img src="./assets/close.svg" alt="fechar_menu" className="close_menu_icon"/>
                </button>
                <ul id="header_menu" className="header_menu">
                    <li><a href="./index.html" className="header_link">Início</a></li>
                    <li><a href="#" className="header_link">Páginas</a></li>
                    <li><a href="./categories.html?category=Destaques" className="header_link">Destaques</a></li>
                    <li><a href="./administrator-page-category.html" className="header_link">Admin</a></li>
                    <li><a href="./login.html" className="header_link profile_link_menu">Perfil</a></li>
                    <li><a href="./posts.html" className="header_link">Posts</a></li>
                </ul>
            </nav>

            <div className="search_area">
                <form  action="./busca.html" className="search card" method="GET" role="search" aria-label="Pesquisar no site">
                    <input type="text" placeholder="Pesquisar..." name="q" className="input search_input" />
                    <button type="submit" className="search_button" aria-label="Buscar" >
                        <img src="./assets/search.svg" alt="buscar" className="search_icon"/>
                    </button>
                </form>
            </div>

            <a href="./login.html" aria-label="Acessar seu perfil" className="profile_link">
                <img src="./assets/user.png" alt="Foto do perfil"/>
            </a>
        </header>
    )
}