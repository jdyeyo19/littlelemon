import logo from '../Assets/footer_logo.jpg'
import { useNavigate, Link, useLocation } from 'react-router-dom';


function Footer() {
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

    return(
        <footer className='footer'>
            <div className="footer_logo">
                <img src={logo} alt="little_lemon_logo."/>
            </div>
            <div className="footer-nav-contai">
                <h2>Doormat Navigation</h2>
                <nav>
                    <ul className="footer-navigation">
                        <li><Link to="/" >HOME</Link></li>
                    <li>{ ishome ? <a href="#about" >ABOUT</a>:<Link to="/" onClick={()=>{handlenavigation()}}>ABOUT</Link>}</li>
                    <li><Link to="/menu" >MENU</Link></li>
                    <li><Link to="/reservations" >RESERVATIONS</Link></li>
                    <li><Link to="/orderonline" >ORDER ONLINE</Link></li>
                    <li><a href="/" >LOGIN</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-nav-contai">
                <h2>Contact</h2>
                <nav>
                    <ul className="footer-navigation">
                        <li><Link title="123 Main St, Chicago, IL, 60018" onClick={()=>{alert("123 Main St, Chicago, IL, 60018")}}>Address</Link></li>
                        <li><Link title="3124567890" onClick={()=>{alert("3124567890")}}>Phone Number</Link></li>
                        <li><Link title="example@littlelemon.com" onClick={()=>{alert("example@littlelemon.com")}}>Email</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-nav-contai">
                <h2>Social Media Links</h2>
                <nav>
                    <ul className="footer-navigation">
                        <li><Link to="/">Facebook</Link></li>
                        <li><Link to="/">Instagram</Link></li>
                        <li><Link to="/">Whatsapp</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer