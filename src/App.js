import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Reservation from './components/Reservation';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/reservations" element={<Reservation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
