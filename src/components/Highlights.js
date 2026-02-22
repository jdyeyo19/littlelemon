import greek from '../Assets/greek_salad.jpg'
import brushetta from '../Assets/brushetta.jpg'
import lemon from '../Assets/lemon_dessert.jpg'
import {Bike} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Highlights (){
    const special_plates =
    [{id: 1,name:"Greek Salad", price: 12.99, description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",image:greek},
        {id: 2,name:"Bruschetta", price: 9.99, description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",image: brushetta},
        {id: 3,name: "Lemon Pie", price: 5.00, description: "this comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.", image:lemon}
    ]
    return(
        <section className="high-container">
            <div className="weeks-special">
                <h2>This weeks specials</h2>
                <button><Link to="/menu">Online Menu</Link></button>
            </div>
            <div className="weeks-card-container">
                {special_plates.map( p => {
                    return(
                    <div className="weeks-card" key={p.id}>
                        <div className="weeks-card-img">
                            <img src={p.image} alt={p.name}/>
                        </div>
                        <div className="weeks-card-info">
                            <div className="wci-tittle">
                                <h3>{p.name}</h3>
                                <p>{"$" + p.price.toFixed(2)}</p>
                            </div>
                            <p className="wci-description">{p.description}</p>
                            <Link to="/orderonline" className="wci-order"><b>Order A Delivery</b> <span><Bike /></span></Link>
                        </div>
                    </div>)
                })}
            </div>
        </section>
    )
}