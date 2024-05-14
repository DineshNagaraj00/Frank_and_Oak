import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import WomenShopping from './Pages/WomenShopping';
import MenShopping from './Pages/MenShopping';
import Sale from './Pages/Sale';
import { useState } from 'react';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';

function App() {
  const [showLogin,setShowLogin]=useState(false);
  const [showCart,setShowCart]=useState(false);

  

  return (
    <>
    {showLogin?<Login/>:<></>}
    {showCart ? <Cart/> : <></>}
    {showLogin && <Login setShowLogin={setShowLogin} />}
    {showCart && <Cart setShowCart={setShowCart} />}
    <div className="App">
        <Navbar setShowLogin={setShowLogin} setShowCart={setShowCart}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/women' element={<WomenShopping/>} />
          <Route exact path='/men' element={<MenShopping/>} />
          <Route exact path='/sale' element={<Sale/>} />
        </Routes>
        <Footer/>
      
    </div>
    </>
  );
}

export default App;
