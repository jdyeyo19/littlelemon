import maria from '../Assets/señora.png'
import antonio from '../Assets/antonio.png'

export default function About (){
    return(
        <article id="about">
            <div className="story">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <h4>"Maria":</h4>
                <p>I learned to cook the way my mother taught me — by feeling, tasting,
                    and sharing. In my kitchen, Mediterranean food was never just food.
                    It was family, patience, and love served at the table. Every
                    recipe carries a memory, every dish a piece of our history.
                </p>
                <h4>"Antonio":</h4>
                <p>
                I grew up with those flavors. Watching my grandmother cook taught me
                    that tradition is something to protect, not replace. After learning
                    new techniques and traveling, I realized I could honor her recipes
                    while giving them a modern touch.
                </p>
                <h4>"Maria and Antonio":</h4>
                <p>
                    This restaurant is our shared dream: traditional Mediterranean recipes,
                    made with care, and reimagined for today. Every dish tells our story —
                    from our family to your table.
                </p>
            </div>
            <div className='founders'>
                <img src={maria} id='maria'alt='Maria_picture'/>
                <img src={antonio} id='antonio' alt='Antonio_picture'/>
            </div>
        </article>
    )
}