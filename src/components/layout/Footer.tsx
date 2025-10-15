import instagramImage from '../../assets/instagram.svg'
import facebookImage from '../../assets/facebook.svg'
import twitterImage from '../../assets/twitter.svg'
import youtubeImage from '../../assets/youtube.svg'
import linkedinImage from '../../assets/linkedin.svg'

export default function Footer() {
    return (
    <footer>
        <nav className="socials" aria-label="Redes sociais">
            <a href="#" className="social_link" aria-label="Link para o Instagram">
                <img src={instagramImage} alt="Instagram" className="social_icon"/>
            </a>
            <a href="#" className="social_link" aria-label="Link para o Facebook">
                <img src={facebookImage} alt="Facebook" className="social_icon"/>
            </a>
            <a href="#" className="social_link" aria-label="Link para o Twitter">
                <img src={twitterImage} alt="Twitter" className="social_icon"/>
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="social_link" aria-label="Link para o YouTube">
                <img src={youtubeImage} alt="YouTube" className="social_icon"/>
            </a>
            <a href="#" className="social_link" aria-label="Link para o LinkedIn">
                <img src={linkedinImage} alt="LinkedIn" className="social_icon"/>
            </a>
        </nav>
        <p className="copyright">&copy; 2025 6G Mackenzie. Todos os direitos reservados.</p>
    </footer>
    )
}