import logo from '../Assets/logo.jpg'
import { Link, useLocation } from 'react-router-dom';

function Header() {

    const location = useLocation();
    const ishome = location.pathname === "/"
    return(
        <header>
            <div className="logo-container">
                <img src={logo} alt="little_lemon_logo."/>
            </div>
            <nav>
                <ul className="header-nav-container">
                    <li><Link to="/">HOME</Link></li>
                    <li>{ ishome ? <a href="#about">ABOUT</a>:<Link to="/">ABOUT</Link>}</li>
                    <li><a href="#">MENU</a></li>
                    <li><Link to="/reservations">RESERVATIONS</Link></li>
                    <li><Link to="#">ORDER ONLINE</Link></li>
                    <li><a href="#">LOGIN</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header