import imagemTrabalho from "../assets/trabalho.png"
import imagemLivros from "../assets/livros.png"
import imagemTecnologia from "../assets/tecnologia.png"

type category = {
    url: string,
    name: string,
    alt?: string
    image?: string
}

export const popular = [
    {
        url: "./categories.html?category=Trabalho",
        name: "Trabalho",
        alt: "Categoria de trabalho",
        image: imagemTrabalho
    },
    {
        url: "./categories.html?category=Livros",
        name: "Livros",
        alt: "Categoria de livros",
        image: imagemLivros
    },
    {
        url: "./categories.html?category=Tecnologia",
        name: "Tecnologia",
        alt: "Categoria de tecnologia",
        image: imagemTecnologia
    }
] as category[]

export const categories = [
    {
        url: "./categories.html?category=Trabalho",
        name: "Trabalho"
    },
    {
        url: "./categories.html?category=Tecnologia",
        name: "Tecnologia"
    },
    {
        url: "./categories.html?category=Produtividade",
        name: "Produtividade"
    },
    {
        url: "./categories.html?category=Filmes",
        name: "Filmes"
    },
    {
        url: "./categories.html?category=Lifestyle",
        name: "Lifestyle"
    },
    {
        url: "./categories.html?category=Educação",
        name: "Educação"
    },
    {
        url: "./categories.html?category=Mailing",
        name: "Mailing"
    },
    {
        url: "./categories.html?category=eCommerce",
        name: "eCommerce"
    },
    {
        url: "./categories.html?category=Alimentação",
        name: "Alimentação"
    },
    {
        url: "./categories.html?category=Social",
        name: "Social"
    }
] as category[];
