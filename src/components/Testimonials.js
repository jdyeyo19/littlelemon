import {Star} from 'lucide-react'
import client1 from '../Assets/muchacho.png'

function Testimonials() {
    return(
        <article className="testimonials">
            <h2>Testimonials</h2>
            <div className='rating-cards'>
                <div className="rating-container">
                    <h4>Rating</h4>
                    <div>
                        <Star fill='#f4ce14'/><Star fill='#f4ce14' /><Star fill='#f4ce14'/><Star fill='#f4ce14'/><Star/>
                    </div>
                    <div className="client-info">
                        <img className="client-pic" src={client1}/>
                        <h5>Yamada Taro</h5>
                    </div>
                    <p>"My friends invited me for my birthday, I loved the food"</p>
                </div>
                <div className="rating-container">
                    <h4>Rating</h4>
                    <div>
                        <Star fill='#f4ce14'/><Star fill='#f4ce14' /><Star fill='#f4ce14'/><Star fill='#f4ce14'/><Star fill='#f4ce14'/>
                    </div>
                    <div className="client-info">
                        <img className="client-pic" src="https://img.freepik.com/free-photo/happy-excited-girl-with-flying-darkhaired-girl-is-turn-around-camera-while-walking-down-road-with-green-yellow-trees-happy-girl-walking-city_291650-2409.jpg?semt=ais_hybrid&w=740&q=80"/>
                        <h5>Sara Smith</h5>
                    </div>
                    <p>"The best desserts I have ever tried"</p>
                </div>
                <div className="rating-container">
                    <h4>Rating</h4>
                    <div>
                        <Star fill='#f4ce14'/><Star fill='#f4ce14' /><Star fill='#f4ce14'/><Star /><Star/>
                    </div>
                    <div className="client-info">
                        <img className="client-pic" src="https://img.freepik.com/free-photo/front-view-wise-woman-posing-studio_23-2149883511.jpg?semt=ais_hybrid&w=740&q=80"/>
                        <h5>Magy Doe</h5>
                    </div>
                    <p>"Not many options for vegetarians. However, the greek salad was delicious"</p>
                </div>
            </div>
        </article>
    )
}

export default Testimonials