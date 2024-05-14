import React, { useState } from 'react'
import '../HomePage/JustIn.css'


function JustIn() {
    const [selected,setSelected]=useState('women');


    const handleChange =(category)=>{
        setSelected(category)
    }



  return (
    <div className="just_in">
                    <div className="words">
                        <div className="left"><h1>This just in</h1></div>
                        <div className="right">
                              <span  onClick={() =>handleChange('women')}>Women</span>
                              <span  onClick={() => handleChange('men')}>Men</span>
                        </div>
                    </div>

                    <div className="data">
                        {
                            selected === 'women' ? (
                                <>
                                     <div className="womens">
                                            <div className="women">
                                                  <img src="https://www.frankandoak.com/cdn/shop/files/2220119-012.01_1200x.jpg?v=1711461203" alt="" />
                                                  <p>The Courtney Loose Denim Short in White</p>
                                                 <h4>$89.5</h4>
                                             </div>
                                             <div className="women">
                                                  <img src="https://www.frankandoak.com/cdn/shop/files/2220139-229.01_1200x.jpg?v=1714075180" alt="" />
                                                  <p>The Courtney Loose Denim Short in Sepia</p>
                                                  <h4>$89.5</h4>
                                             </div>
                                             <div className="women">
                                                 <img src="https://www.frankandoak.com/cdn/shop/files/2110353-3AL.01_1200x.jpg?v=1713793540" alt="" />
                                                 <p>The Printed Camp Collar Blouse in Red Clay</p>
                                                 <h4>$99.12</h4>
                                             </div>
                                             <div className="women">
                                                 <img src="https://www.frankandoak.com/cdn/shop/files/2110345-366.01_1200x.jpg?v=1711125844" alt="" />
                                                 <p>The Crinkle Textured Blouse in Mahogany</p>
                                                 <h4>$89.5</h4>
                                             </div>
                                    </div>  
                                </>
                                ) : (
                                    <>
                                       <div className="mens">
                                            <div className="men">
                                                 <img src="https://www.frankandoak.com/cdn/shop/files/0C2A9792_67d33527-af8c-4f7c-8653-921a6e4e6c2b_1200x.jpg?v=1715200569" alt="" />
                                                 <p>The Colin Tapered Linen Pant in Hazel</p>
                                                <h4>$119.5</h4>
                                            </div>
                                            <div className="men">
                                                 <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/1110702-2CF.02_450x.jpg?v=1711570059" alt="" />
                                                 <p>The Striped Camp Collar Shirt in Cloud</p>
                                                 <h4>$89.5</h4>
                                            </div>
                                            <div className="men">
                                                <img src="https://www.frankandoak.com/cdn/shop/files/1210526-481.01_1200x.jpg?v=1711572301" alt="" />
                                                <p>The Colin Tapered Seersucker Pant in Deep Blue</p>
                                                <h4>$99.12</h4>
                                            </div>
                                            <div className="men">
                                                <img src="https://www.frankandoak.com/cdn/shop/files/0C2A9058_58ef935e-dab4-4302-813e-b1aa17f57c4e_1200x.jpg?v=1715198867" alt="" />
                                                <p>The Mixed-Stitch Polo in Chocolate brown</p>
                                                <h4>$99.5</h4>
                                            </div>
                                        </div>   
                                    </>

                            )
                        }

                      
                    </div>


            </div>
  )
}

export default JustIn