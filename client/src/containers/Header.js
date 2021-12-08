import { useState } from 'react';
import logo from "../assets/logo.png";
import Hamburger from 'hamburger-react';
import Navbar from "../components/Navbar";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false); 

    const handleClick = () => {
        if (window.innerWidth > 800) {
            return null;
        } else {
            setIsOpen(!isOpen);
        }
    }

    return (
        <header className={isOpen ? 'open' : null}>
            <div className="top-container">
                <img className="logo" src={logo} alt="logo" />
                <div className="hamburger">
                    <Hamburger size={25}
                        toggled = { isOpen } rounded 
                        toggle = { handleClick } />
                </div>
            </div>
            <Navbar isOpen={isOpen} handleClick={handleClick}/>
        </header>
    );
}
 
export default Header;