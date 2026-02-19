import { useState } from "react";
import greek from '../Assets/greek_salad.jpg'
import brushetta from '../Assets/brushetta.jpg'
import lemon from '../Assets/lemon_dessert.jpg'
import hummus from '../Assets/hummus.png'
import dolma from '../Assets/dolma.avif'
import calamari from '../Assets/calamari.avif'
import seabass from '../Assets/seabass.avif'
import gyro from '../Assets/gyro.avif'
import paella from '../Assets/paella.avif'
import souvlaki from '../Assets/Souvlaki.avif'
import moussaka from '../Assets/moussaka.avif'
import shrimpPasta from '../Assets/Shrimp.jpg'
import falafel from '../Assets/falafel.jpg'
import octopus from '../Assets/octopus.avif'
import baklava from '../Assets/baklava.avif'
import tiramisu from '../Assets/Tiramisu.avif'
import gelato from '../Assets/gelato.avif'
import sangria from '../Assets/sangria.avif'
import whitesangria from '../Assets/whitesangria.avif'
import lemonade from '../Assets/lemonade.avif'
import coffee from '../Assets/coffee.avif'
import espresso from '../Assets/espresso.avif'
import cappuccino from '../Assets/cappuccino.avif'
import water from '../Assets/water.jpg'
import redwine from '../Assets/redwine.avif'
import whitewine from '../Assets/whitewine.avif'
import orangejuice from '../Assets/orangejuice.avif'

export default function Menu() {
  const [category, setCategory] = useState("all");

  const filteredMenu =
    category === "all"
      ? menu
      : menu.filter((item) => item.category === category);

  return (
    <section className="menu-section">
      <h2 className="menu-title">Our Mediterranean Menu</h2>

      {/* Filtros */}
      <div className="menu-filters">
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("starter")}>Starters</button>
        <button onClick={() => setCategory("main")}>Main Dishes</button>
        <button onClick={() => setCategory("dessert")}>Desserts</button>
        <button onClick={() => setCategory("drink")}>Drinks</button>
      </div>

      {/* Grid de platos */}
      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <div className="menu-info">
              <div className="menu-header">
                <h3>{item.name}</h3>
                <span>${item.price.toFixed(2)}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const menu = [
  // 🥗 ENTRADAS
  {
    id: 1,
    category: "starter",
    name: "Greek Salad",
    price: 12.99,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greek
  },
  {
    id: 2,
    category: "starter",
    name: "Bruschetta",
    price: 9.99,
    description: "Grilled artisan bread rubbed with garlic and topped with fresh tomatoes, basil and extra virgin olive oil.",
    image: brushetta
  },
  {
    id: 4,
    category: "starter",
    name: "Hummus Trio",
    price: 10.50,
    description: "Classic chickpea hummus, roasted red pepper hummus and beetroot hummus served with warm pita bread.",
    image: hummus
  },
  {
    id: 5,
    category: "starter",
    name: "Stuffed Grape Leaves",
    price: 8.99,
    description: "Vine leaves filled with rice, herbs and a hint of lemon, served with yogurt sauce.",
    image: dolma
  },
  {
    id: 6,
    category: "starter",
    name: "Calamari Fritti",
    price: 13.50,
    description: "Lightly fried calamari served with lemon aioli and marinara sauce.",
    image: calamari
  },

  // 🍝 PLATOS PRINCIPALES
  {
    id: 7,
    category: "main",
    name: "Grilled Sea Bass",
    price: 24.99,
    description: "Fresh Mediterranean sea bass grilled with herbs, served with roasted vegetables and lemon butter sauce.",
    image: seabass
  },
  {
    id: 8,
    category: "main",
    name: "Lamb Gyro Plate",
    price: 19.99,
    description: "Slow-roasted lamb served with pita, tzatziki, tomato, onion and seasoned fries.",
    image: gyro
  },
  {
    id: 9,
    category: "main",
    name: "Seafood Paella",
    price: 27.50,
    description: "Traditional Spanish rice with shrimp, mussels, calamari and saffron.",
    image: paella
  },
  {
    id: 10,
    category: "main",
    name: "Chicken Souvlaki",
    price: 18.99,
    description: "Marinated grilled chicken skewers served with rice pilaf and tzatziki.",
    image: souvlaki
  },
  {
    id: 11,
    category: "main",
    name: "Eggplant Moussaka",
    price: 17.50,
    description: "Layers of eggplant, seasoned ground beef and creamy béchamel sauce baked to perfection.",
    image: moussaka
  },
  {
    id: 12,
    category: "main",
    name: "Shrimp Linguine",
    price: 22.00,
    description: "Linguine pasta tossed with shrimp, garlic, cherry tomatoes and white wine sauce.",
    image: shrimpPasta
  },
  {
    id: 13,
    category: "main",
    name: "Falafel Bowl",
    price: 16.50,
    description: "Crispy falafel served over quinoa salad with tahini dressing.",
    image: falafel
  },
  {
    id: 14,
    category: "main",
    name: "Grilled Octopus",
    price: 26.00,
    description: "Tender octopus char-grilled and served with olive oil, capers and fingerling potatoes.",
    image: octopus
  },

  // 🍰 POSTRES
  {
    id: 3,
    category: "dessert",
    name: "Lemon Pie",
    price: 5.00,
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemon
  },
  {
    id: 15,
    category: "dessert",
    name: "Baklava",
    price: 6.50,
    description: "Layers of flaky filo pastry filled with walnuts and honey syrup.",
    image: baklava
  },
  {
    id: 16,
    category: "dessert",
    name: "Tiramisu",
    price: 7.00,
    description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream.",
    image: tiramisu
  },
  {
    id: 17,
    category: "dessert",
    name: "Pistachio Gelato",
    price: 6.00,
    description: "Creamy homemade pistachio gelato made with Sicilian pistachios.",
    image: gelato
  },

  // 🍷 BEBIDAS
  {
    id: 18,
    category: "drink",
    name: "Red Sangria",
    price: 8.50,
    description: "Spanish red wine mixed with fresh fruits and citrus liqueur.",
    image: sangria
  },
  {
    id: 19,
    category: "drink",
    name: "White Sangria",
    price: 8.50,
    description: "White wine sangria infused with peach and citrus flavors.",
    image: whitesangria
  },
  {
    id: 20,
    category: "drink",
    name: "Mediterranean Lemonade",
    price: 4.50,
    description: "Fresh lemonade with mint and orange blossom water.",
    image: lemonade
  },
  {
    id: 21,
    category: "drink",
    name: "Turkish Coffee",
    price: 4.00,
    description: "Strong and aromatic traditional Turkish coffee.",
    image: coffee
  },
  {
    id: 22,
    category: "drink",
    name: "Espresso",
    price: 3.50,
    description: "Authentic Italian espresso shot.",
    image: espresso
  },
  {
    id: 23,
    category: "drink",
    name: "Cappuccino",
    price: 4.50,
    description: "Espresso with steamed milk and foam.",
    image: cappuccino
  },
  {
    id: 24,
    category: "drink",
    name: "Mineral Water",
    price: 3.00,
    description: "Sparkling or still natural mineral water.",
    image: water
  },
  {
    id: 25,
    category: "drink",
    name: "House Red Wine",
    price: 9.00,
    description: "Selected Mediterranean house red wine.",
    image: redwine
  },
  {
    id: 26,
    category: "drink",
    name: "House White Wine",
    price: 9.00,
    description: "Selected Mediterranean house white wine.",
    image: whitewine
  },
  {
    id: 27,
    category: "drink",
    name: "Fresh Orange Juice",
    price: 5.00,
    description: "Freshly squeezed orange juice.",
    image: orangejuice
  }
];