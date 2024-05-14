import React from 'react';
import '../Womens/WomenContent.css';
import { Link } from 'react-router-dom';
import WomenData from '../../Data/WomenData';

function WomenContent() {
  return (
    <div className='women_content'>
        <h1>New In</h1>
      <div className="products">
        
        {WomenData.map(product => (
          <div key={product.id} className="products_image">
            <Link>
              <div className="second">
                <div className="picture">
                  <img src={product.image} alt='Imgaes' />
                </div>
                <p>{product.name}</p>
                <p>${product.price}</p>
                <div className="btns">
                <button>ADD TO CART</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenContent;
