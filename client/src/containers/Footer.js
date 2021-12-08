import SocialNetworks from '../components/SocialNetworks';
import FooterMenu from '../components/FooterMenu';

const Footer = () => {

    return (
        <footer>
            <SocialNetworks />
            <FooterMenu />
            <div className="footer-bottom">
                <p>Aaron Ivan Amaro 2021, Buenos Aires, Argentina</p>
            </div>
        </footer>
    );
}
 
export default Footer;