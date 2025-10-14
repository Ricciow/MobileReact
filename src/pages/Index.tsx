import Card from "../components/card/Card";

import imagemIntrodution from "../assets/introduction.png"
import imagemTrabalho from "../assets/trabalho.png"
import imagemLivros from "../assets/livros.png"
import imagemTecnologia from "../assets/tecnologia.png"
import imagemDesign from "../assets/design.png"
import imagemEmpresas from "../assets/empresas.png"
import IndexSection from "../components/layout/IndexSection";
import Button from "../components/button/button";

export default function Index() {
    return (
        <main className="main_index">
            <IndexSection section="introduction" ariaLabeledby="introduction_title">
                <div className="introduction_texts">
                    <h1 id="introduction_title" className="introduction_title">Navegue por tópicos de interesse</h1>
                    <p className="introduction_text">Descubra conteúdos por categorias, posts em destaque e as escolhas do
                        editor.</p>
                    <div className="introduction_buttons">
                        <Button to="./newsletter.html">Assine a newsletter</Button>
                        <Button to="#categories" inversed>Explorar categorias</Button>
                    </div>
                </div>
                <Card image={imagemIntrodution} alt="Apresentação do site"/>
            </IndexSection>

            <IndexSection section="popular_categories" ariaLabeledby="popular_categories_title" title="Categorias Populares">
                <nav aria-label="Categorias populares" className="popular_categories_list">
                    <Card image={imagemTrabalho} alt="Categoria de trabalho" to="./categories.html?category=Trabalho" ariaLabel="Trabalho" overlay="Trabalho"/>
                    <Card image={imagemLivros} alt="Categoria de livros" to="./categories.html?category=Livros" ariaLabel="Livros" overlay="Livros"/>
                    <Card image={imagemTecnologia} alt="Categoria de tecnologia" to="./categories.html?category=Tecnologia" ariaLabel="Tecnologia" overlay="Tecnologia"/>
                </nav>
            </IndexSection>

            <IndexSection section="categories" ariaLabeledby="categories_title" title="Todas as Categorias">
                <nav aria-label="Todas as categorias" className="categories_internal">
                    <Card to="./categories.html?category=Trabalho" text="Trabalho"/>
                    <Card to="./categories.html?category=Tecnologia" text="Tecnologia"/>
                    <Card to="./categories.html?category=Produtividade" text="Produtividade"/>
                    <Card to="./categories.html?category=Filmes" text="Filmes"/>
                    <Card to="./categories.html?category=Lifestyle" text="Lifestyle"/>
                    <Card to="./categories.html?category=Educação" text="Educação"/>
                    <Card to="./categories.html?category=Mailing" text="Mailing"/>
                    <Card to="./categories.html?category=eCommerce" text="eCommerce"/>
                    <Card to="./categories.html?category=Alimentação" text="Alimentação"/>
                    <Card to="./categories.html?category=Social" text="Social"/>
                </nav>
            </IndexSection>

            <div className="bottom_area">
                <IndexSection section="top_posts" ariaLabeledby="destaques" title="Postagens em Destaque">
                    <nav aria-label="Postagens em destaque" className="top_posts_list">
                        <Card image={imagemDesign} alt="Postagem 1" title="Erros de Design que Todos Devem Evitar" data="31 Jul 2025" duration="3 min" category="Destaque" to="./post.html" id="post_1"/>
                        <Card image={imagemEmpresas} alt="Postagem 1" title="As maiores Empresas por Receita" data="31 Jul 2025" category="Destaque" to="./post.html" id="post_2"/>
                    </nav>
                </IndexSection>

                <IndexSection section="editor_picks" ariaLabeledby="escolhas" title="Escolhas do editor" aside>
                    <nav aria-label="Escolhas do editor" className="card">
                        <ul className="editor_picks_list">
                            <li><a href="#">O uso negativo da Internet</a></li>
                            <li><a href="#">Segredo do brainstorm</a></li>
                            <li><a href="#">Escalar para pequenos negócios</a></li>
                            <li><a href="#">O futuro do trabalho remoto</a></li>
                        </ul>
                    </nav>
                </IndexSection>
            </div>
        </main>
    );
}