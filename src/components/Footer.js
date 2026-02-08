import logo from '../Assets/footer_logo.jpg'

function Footer() {
    return(
        <footer>
            <div className="footer_logo">
                <img src={logo} alt="little_lemon_logo."/>
            </div>
            <div className="footer-nav-contai">
                <h2>Doormat Navigation</h2>
                <nav>
                    <ul className="footer-navigation">
                        <li><a>HOME</a></li>
                        <li><a>ABOUT</a></li>
                        <li><a>MENU</a></li>
                        <li><a>RESERVATIONS</a></li>
                        <li><a>ORDER ONLINE</a></li>
                        <li><a>LOGIN</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-nav-contai">
                <h2>Contact</h2>
                <nav>
                    <ul className="footer-navigation">
                        <li><a>Address</a></li>
                        <li><a>Phone Number</a></li>
                        <li><a>Email</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-nav-contai">
                <h2>Social Media Links</h2>
                <nav>
                    <ul className="footer-navigation">
                        <li><a>Facebook</a></li>
                        <li><a>Instagram</a></li>
                        <li><a>Whatsapp</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer