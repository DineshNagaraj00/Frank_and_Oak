import React, { useState } from 'react'
import './Cart.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function Cart({ setShowCart }) {
  const [count, setCount] = useState(0);
  const [showItems, setShowItems] = useState(true); // State to manage the visibility of cartItems

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleClose() {
    setShowItems(false); // Set showItems to false when CloseIcon is clicked
  }

  return (
    <div className='cart'>
      <div className="cart_container">
        <div className="cart_bar">
          <div className="cart_title">
            <Link onClick={() => setShowCart(false)}><NavigateBeforeIcon/></Link>
            <p>Continue Shopping</p>
          </div>

          <div className="cart_blackBox">
            <p>Free Shipping on orders $79+ and free returns</p>
          </div>

          {showItems && (
            <div className="cartItems">
              <div className="imag">
                <img src="https://www.frankandoak.com/cdn/shop/files/2120473-5MJ.01_1200x.jpg?v=1715280735" alt="" />
                <p>The Essential T-Shirt in Military Green</p>
                <h4>$49.5</h4>
                <CloseIcon onClick={handleClose} />
              </div>
                <div className="counter">
                  <button className="button" onClick={decrement} disabled={count === 0}>-</button>
                  <p className="count">{count}</p>
                  <button className="button" onClick={increment}>+</button>
                </div>
            </div>
          )}
        </div>
        <div className="buyNow">
            <div className="buyHeader">
                <div className="leftSection">
                  <h3>Sub Total</h3>
                  <h4>items</h4>
                </div>
                <div className="rightSection">
                  <h3>$119.0</h3>
                </div>
            </div>
            <div className="check">
                <Button variant='contained'>Add to CheckOut <LockOutlinedIcon/></Button>
                
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart;
