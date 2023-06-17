import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/group.png";
import MenuHam from "../../Assets/images/hamburgermenu.png";
import Search from "../../Assets/images/search.png";
import Setting from "../../Assets/images/setting.png";
import Notification from "../../Assets/images/notification.png";
import Message from "../../Assets/images/message.png";
import Marketplace from "../../Assets/images/marketplace.png";
import Profile from "../../Assets/images/perfil.png";
import Dropdown from 'react-bootstrap/Dropdown';
import "./navbar.css"

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const toogleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
        <header className="header">
            <nav className="navbar">
                <button className="navbar-button" onClick={toogleMenu}>
                    <img src={MenuHam} alt="Menu" />
                </button>
                <Link to="/home" className="logo" >
                    <img src={Logo} alt="Logo" />
                </Link>
            </nav>
            <div className="top-search">
                <div className="search">
                    <input type="text" placeholder="Search here" />
                    <button className="icon-search">
                        <img src={Search} alt="Search" />
                    </button>
                </div>
                <Link to="/settings" className="icon-settings">
                    <img src={Setting} alt="Setting" />
                </Link>
            </div>
            <div className="top-right">
                <Link to="/notification" className="icon-btn">
                    <img src={Notification} alt="Notification" />
                    <div className="counter"></div>
                </Link>
                <Link to="/message" className="icon-btn responsive">
                    <img src={Message} alt="Message" />
                    <div className="counter"></div>
                </Link>
                <Link to="/shop" className="icon-btn responsive">
                    <img src={Marketplace} alt="Marketplace" />
                    <div className="counter clean"></div>
                </Link>
                <Dropdown>
                    <Dropdown.Toggle variant="success" className="dropdown" id="dropdown-basic">
                        <div className="top-profile">
                            <img src={Profile} alt="Search" />
                        </div>
                        <span>Facu</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </header>
        <div className={ `navbar-custome ${ menu ? 'isActive' : ''}` }>
            <ul className="navbar-list">
                <li className="navbar-item">Dashboard/</li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;
