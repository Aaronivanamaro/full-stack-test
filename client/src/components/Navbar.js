import { Link } from 'react-router-dom';
import { menuItems } from '../data/menuData'

const Navbar = ({ isOpen, handleClick }) => {

    return (
        <nav className={isOpen ? 'visible' : null}>
            <ul>
                {menuItems
                    .filter(item => item.title !== 'Technology')
                    .map((item, index) => {
                        return <li key={index} onClick={handleClick}>
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                        })
                }
            </ul>
        </nav>
    );
}

export default Navbar;