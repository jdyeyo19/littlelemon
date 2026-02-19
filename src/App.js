import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Reservation from './components/BookingForm';
import Menu from './components/Menu';
import OrderOnline from './components/OrderOnline';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/menu" element={<Menu />}/>
        <Route path="/orderonline" element={<OrderOnline />}/>
      </Routes>
      <Footer />
      <div className='copyright'><p>© 2026 Juan D. Martinez. All rights reserved.</p></div>
    </BrowserRouter>
  );
}

export default App;
