import logo from '../Assets/logo.jpg'
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const ishome = location.pathname === "/"

    const navigate = useNavigate()
    const handlenavigation = () => {
        navigate('/');

        setTimeout( () => {
            document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth"})
        }, 200);
    };
    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    return(
        <header>
            {/* Mobile Icon */}
            <div className="mobile-menu-icon" onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
            <div className="logo-container">
                <img src={logo} alt="little_lemon_logo."/>
            </div>
            <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
                <ul className="header-nav-container">
                    <li className='nav-item'><Link to="/" onClick={closeMenu}>HOME</Link></li>
                    <li className='nav-item'>{ ishome ? <a href="#about" onClick={closeMenu}>ABOUT</a>:<Link to="/" onClick={()=>{handlenavigation();closeMenu()}}>ABOUT</Link>}</li>
                    <li className='nav-item'><Link to="/menu" onClick={closeMenu}>MENU</Link></li>
                    <li className='nav-item'><Link to="/reservations" onClick={closeMenu}>RESERVATIONS</Link></li>
                    <li className='nav-item'><Link to="/orderonline" onClick={closeMenu}>ORDER ONLINE</Link></li>
                    <li className='nav-item'><a href="/" onClick={closeMenu}>LOGIN</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header