import logo from '../Assets/logo.jpg'
function Header() {
    return(
        <header>
            <div className="logo-container">
                <img src={logo} alt="little_lemon_logo."/>
            </div>
            <nav>
                <ul className="header-nav-container">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">MENU</a></li>
                    <li><a href="#">RESERVATIONS</a></li>
                    <li><a href="#">ORDER ONLINE</a></li>
                    <li><a href="#">LOGIN</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header