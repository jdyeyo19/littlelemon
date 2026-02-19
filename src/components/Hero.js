import sushi from '../Assets/sushi.jpg'
import { Link } from 'react-router-dom';

export default function Hero(){
    return(
        <section className="hero-contai">
            <div className="hero-green"></div>
            <div className="hero-white"></div>
            <div className="hero-info-card">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional
                     recipes serve with a modern twist.
                </p>
                <button><Link to="/reservations">Reserve a Table</Link></button>
            </div>
            <div className="hero-image">
                <img src={sushi} alt='sushi_rolls'/>
            </div>
        </section>
    )
}