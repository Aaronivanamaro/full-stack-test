import { menuItems } from "../data/menuData";
import { Link } from 'react-router-dom';

const FooterMenu = () => {

    return (
        <div className="footer-menu-container">
            <ul className="bottom-menu-items">
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            { 
                                item.link === '/tech' ?
                                    <Link to="/">
                                        <h4>{item.title}</h4>
                                    </Link> :
                                    <Link to={item.link}>
                                        <h4>{item.title}</h4>
                                    </Link> 
                            }
                            { 
                                item.submenu ?
                                    <ul>
                                        {item.submenu.map((i, x) => {
                                            return (
                                                <li key={x}>
                                                    <div>{i.icon}</div>
                                                    <p>{i.text}</p>
                                                </li>

                                            )
                                        })}
                                    </ul>
                                : null                        
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default FooterMenu;