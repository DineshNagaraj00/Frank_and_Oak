import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="shipping">
            <img src="https://www.frankandoak.com/cdn/shop/files/Shipping-black_2_40x.png?v=1657555435" alt="" />
            <h2>Free shipping</h2>
            <h4>on order over $79</h4>
        </div>
        <div className="shipping">
            <img src="https://www.frankandoak.com/cdn/shop/files/Returns-black_6defe504-0961-4e6b-9c71-70f44686eaa1_40x.png?v=1668024666" alt="" />
            <h2>Free returs</h2>
            <h4>Only keep what you love.</h4>
        </div>
        <div className="shipping">
            <img src="https://www.frankandoak.com/cdn/shop/files/loyalty_logo_light_40x.png?v=1672328644" alt="" />
            <h2>Frank Rewards</h2>
            <h4>Earn points and get rewards.</h4>
        </div>
        <div className="shipping">
            <img src="https://www.frankandoak.com/cdn/shop/files/Sezzle_40x.png?v=1704401097" alt="" />
            <h2>Buy Now, Pay Later</h2>
            <h4>Select Klarna at checkout.</h4>
        </div>
    </div>
  )
}

export default Footer