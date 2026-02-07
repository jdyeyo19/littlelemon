import sushi from '../Assets/sushi.jpg'
export default function Hero(){
    return(
        <section className="hero-container">
            <div className="hero-green"></div>
            <div className="hero-white"></div>
            <div className="hero-info-card">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional
                     recipes serve with a modern twist.
                </p>
                <button>Reserve a Table</button>
            </div>
            <div className="hero-image">
                <img src={sushi}/>
            </div>
        </section>
    )
}