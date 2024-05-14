import React from 'react'
import '../Men/MenSideBar.css'
import { Link } from 'react-router-dom'
import Subcategory from '../Sidebar/Subcategory'
import Size from '../Sidebar/Size'
import Colors from '../Sidebar/Colors'
import Price from '../Sidebar/Price'

function MensSideBar() {
  return (
                <div className="women_">

                    <div className='sidebar' style={{ overflowY: 'auto', height: '1000px', }}>
                            <div className="links">
                                <Link to='/'>Home/Men</Link>
                            </div>

                            <div className="sub">
                                <Subcategory/>
                                
                            </div>
                            <div className="size">
                                <Size/>
                                <hr />
                            </div>

                            <div className="colors">
                                <Colors/>
                                <hr />
                            </div>
                            <div className="prize">
                                <Price/>
                                <hr />
                            </div>
                    </div>
                </div>

  )
}

export default MensSideBar