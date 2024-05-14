import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../Components/Navbar.css';


function Navbar({ setShowLogin, setShowCart }) {
  const [search, setSearch] = useState(false);

  function handleSearch() {
    setSearch(!search);
  }

  return (
    <div className="pop">
      
      <div className='nav'>
        <div className="left">
          <Link to='/'><h3>Frank and Oak</h3></Link>
          <ul> 
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/sale">Sale</Link></li>
          </ul>
        </div>
        {search && (
          <div className="inputs_search">
            <input type="text" placeholder='Search' />
            <SearchIcon />
          </div>
        )}
        <div className="right">
          <Link onClick={handleSearch}><SearchIcon /></Link>
          <Link onClick={() => setShowLogin(true)}><AccountCircleIcon /></Link>
          <Link onClick={() => setShowLogin(true)}><FavoriteBorderIcon /></Link>
          <Link onClick={() => setShowCart(true)}><ShoppingBagIcon /></Link>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
