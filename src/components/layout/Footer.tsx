export default function Footer() {
    return (
        <footer>
        <nav className="socials" aria-label="Redes sociais">
            <a href="#" className="social_link" aria-label="Link para o Instagram">
                <img src="./assets/instagram.svg" alt="Instagram" className="social_icon"/>
            </a>
            <a href="#" className="social_link" aria-label="Link para o Facebook">
                <img src="./assets/facebook.svg" alt="Facebook" className="social_icon"/>
            </a>
            <a href="#" className="social_link" aria-label="Link para o Twitter">
                <img src="./assets/twitter.svg" alt="Twitter" className="social_icon"/>
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="social_link" aria-label="Link para o YouTube">
                <img src="./assets/youtube.svg" alt="YouTube" className="social_icon"/>
            </a>
            <a href="#" className="social_link" aria-label="Link para o LinkedIn">
                <img src="./assets/linkedin.svg" alt="LinkedIn" className="social_icon"/>
            </a>
        </nav>
        <p className="copyright">&copy; 2025 6G Mackenzie. Todos os direitos reservados.</p>
    </footer>
    )
}