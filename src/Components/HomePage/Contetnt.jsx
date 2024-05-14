import React from 'react'
import '../HomePage/Content.css'
import { Link } from 'react-router-dom'
import JustIn from './JustIn'



function Contetnt() {
  return (
    <div className='content'>

            <div className="one">
                <img src="https://www.frankandoak.com/cdn/shop/files/desktop_duo_93b0f83b-669a-4570-b87b-4effd4778a5d_2160x.jpg?v=1713300376" alt="" />
                    <div className="text">
                    <h2>A Mallorca Story</h2>
                    <h3>Spring/Summer 2024</h3>
                        <div className="btn">
                           <Link to='/women'> <button>Women</button></Link>
                            <Link to='/men'><button>Men</button></Link>
                        </div>
                    </div>
            </div>

            <div className="feature">
                <h1>Featured Categories</h1>
                    <div className="images">
                        <Link>
                                <div className="first">
                                         <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area_adc39dcc-0550-4389-8aa4-7e7fc270f108_900x.jpg?v=1714411971"alt='Imgaes' />
                                         <p>Womens Skirts & Shorts</p>
                                </div>
                        </Link>
                         <Link>
                         
                                  <div className="first">
                                          <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area_a89f846b-f352-4001-b9fd-d112ee43ad72_900x.jpg?v=1713300541" alt='Images' />
                                          <p>Womens T-shirts & Tops</p>
                                 </div>
                         </Link>
                         <Link>
                                     <div className="first">
                                             <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area_copy_c3dc404c-8eab-422d-a26a-c9fab5ead5b3_900x.jpg?v=1714411971" alt='images' />
                                             <p>Mens Pants</p>
                                    </div>
                         </Link>
                         <Link>
                                    <div className="first">
                                             <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-3_df04a24d-432b-4406-bac5-6b3e9d126682_900x.jpg?v=1713300595" alt="" />
                                             <p>Mens Polo Shirts</p>
                                    </div>
                         </Link>
                    </div>
            </div>
            

            <div className="just">
                <JustIn/>
            </div>
            
            <div className="madeFor">
                <div className="top">
                    <div className="right">
                        <img src="https://www.frankandoak.com/cdn/shop/files/Rectangle_35_2160x.jpg?v=1714414024" alt="" />
                    </div>
                    <div className="left">
                        <h1>Made for tan lines</h1>
                        <p>New swimwear silhouettes made with recycled materials.</p>
                        <div className="imagesOfTan">
                            <img src="https://www.frankandoak.com/cdn/shop/files/2610052-5A.01.jpg?crop=center&height=420&v=1713801355&width=314" alt="" />
                            <img src="https://www.frankandoak.com/cdn/shop/files/2610055-00E.01.jpg?crop=center&height=420&v=1713966665&width=314" alt="" />
                            <img src="https://www.frankandoak.com/cdn/shop/files/2610049-002.02_700bcd48-f89b-4cf1-b832-14d37f2eaf9f.jpg?crop=center&height=420&v=1713965657&width=314" alt="" />
                            <img src="https://www.frankandoak.com/cdn/shop/files/2610051-5JQ.01.jpg?crop=center&height=420&v=1713797169&width=314" alt="" />
                        </div>
                    </div>
                </div>

            </div>

    </div>
  )
}

export default Contetnt