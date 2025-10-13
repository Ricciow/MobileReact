import Card from "../components/card/Card";

import imagemIntrodution from "../assets/introduction.png"
import imagemTrabalho from "../assets/trabalho.png"
import imagemLivros from "../assets/livros.png"
import imagemTecnologia from "../assets/tecnologia.png"
import imagemDesign from "../assets/design.png"
import imagemEmpresas from "../assets/empresas.png"

export default function Index() {
    return (
        <main className="main_index">
            <section aria-labelledby="introduction_title" className="introduction">
                <div className="introduction_texts">
                    <h1 id="introduction_title" className="introduction_title">Navegue por tópicos de interesse</h1>
                    <p className="introduction_text">Descubra conteúdos por categorias, posts em destaque e as escolhas do
                        editor.</p>
                    <div className="introduction_buttons">
                        <a href= "./newsletter.html" className="button">Assine a newsletter</a>
                        <a href="#categories" className="button_inverse">Explorar categorias</a>
                    </div>
                </div>
                <Card image={imagemIntrodution} alt="Apresentação do site"/>
            </section>

            <section aria-labelledby="popular_categories_title" className="popular_categories">
                <h2 id="popular_categories_title" className="subtitle">Categorias Populares</h2>
                <nav aria-label="Categorias populares" className="popular_categories_list">
                    <Card image={imagemTrabalho} alt="Categoria de trabalho" to="./categories.html?category=Trabalho" ariaLabel="Trabalho" overlay="Trabalho"/>
                    <Card image={imagemLivros} alt="Categoria de livros" to="./categories.html?category=Livros" ariaLabel="Livros" overlay="Livros"/>
                    <Card image={imagemTecnologia} alt="Categoria de tecnologia" to="./categories.html?category=Tecnologia" ariaLabel="Tecnologia" overlay="Tecnologia"/>
                </nav>
            </section>

            <section aria-labelledby="categories" className="categories">
                <h2 id="categories" className="subtitle">Todas as Categorias</h2>
                <nav aria-label="Todas as categorias" className="categories_internal">
                    <Card to="./categories.html?category=Trabalho" ariaLabel="Trabalho" text="Trabalho"/>
                    <Card to="./categories.html?category=Tecnologia" ariaLabel="Tecnologia" text="Tecnologia"/>
                    <Card to="./categories.html?category=Produtividade" ariaLabel="Produtividade" text="Produtividade"/>
                    <Card to="./categories.html?category=Filmes" ariaLabel="Filmes" text="Filmes"/>
                    <Card to="./categories.html?category=Lifestyle" ariaLabel="Lifestyle" text="Lifestyle"/>
                    <Card to="./categories.html?category=Educação" ariaLabel="Educação" text="Educação"/>
                    <Card to="./categories.html?category=Mailing" ariaLabel="Mailing" text="Mailing"/>
                    <Card to="./categories.html?category=eCommerce" ariaLabel="eCommerce" text="eCommerce"/>
                    <Card to="./categories.html?category=Alimentação" ariaLabel="Alimentação" text="Alimentação"/>
                    <Card to="./categories.html?category=Social" ariaLabel="Social" text="Social"/>
                </nav>
            </section>

            <div className="bottom_area">
                <section aria-labelledby="destaques" className="top_posts">
                    <h2 id="destaques" className="subtitle">Postagens em Destaque</h2>
                    <nav aria-label="Postagens em destaque" className="top_posts_list">
                        <a href="#" aria-labelledby="post_1">
                            <article className="top_post card">
                                <div className="post_image">
                                    <img src={imagemDesign} alt="Postagem 1"/>
                                </div>
                                <div className="post_texts">
                                    <p>31 Jul 2025 &bullet; Destaque</p>
                                    <h3 id="post_1">Erros de Design que Todos Devem Evitar</h3>
                                    <p>3 min</p>
                                </div>
                            </article>
                        </a>
                        <a href="#" aria-labelledby="post_2">
                            <article className="top_post card">
                                <div className="post_image">
                                    <img src={imagemEmpresas} alt="Postagem 1"/>
                                </div>
                                <div className="post_texts">
                                    <p>31 Jul 2025 &bullet; Destaque</p>
                                    <h3 id="post_2">As maiores Empresas por Receita</h3>
                                </div>
                            </article>
                        </a>
                    </nav>
                </section>

                <aside aria-labelledby="escolhas" className="editor_picks">
                    <h2 id="escolhas" className="subtitle">Escolhas do editor</h2>
                    <nav aria-label="Escolhas do editor" className="card">
                        <ul className="editor_picks_list">
                            <li><a href="#">O uso negativo da Internet</a></li>
                            <li><a href="#">Segredo do brainstorm</a></li>
                            <li><a href="#">Escalar para pequenos negócios</a></li>
                            <li><a href="#">O futuro do trabalho remoto</a></li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </main>
    );
}