import React from 'react';
import '../Men/MenContent.css';
import { Link } from 'react-router-dom';
import MenData from '../../Data/MenData';

function MenContent() {
  console.log("Total products:", MenData.length); // Log the total number of products
  
  return (
    <div className='women_content'>
        <h1>New In</h1>
      <div className="products">
        
        {/* Rendering products */}
        {MenData.map((product) => (
          <div className="products_image" key={product.id}>
            <Link>
              <div className="second">
               <div className="picture">
               <img src={product.image} alt='Images' />
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

export default MenContent;
