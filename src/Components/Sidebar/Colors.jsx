import React, { useState } from 'react'

function Colors() {

    const [isCheck, setIscheck]=useState(false)

    function handle(){
        setIscheck(!isCheck)
    }
  return (
    <div>
        <div className="color_title" onClick={handle}>
            <h4>Color</h4>
            <h4>{isCheck?'_' : "+"}</h4>
        </div>
        {isCheck &&
        (
            <div className="color">
                <div className="black">
                    <div className="colo"></div>
                    <span>Black</span>
                </div>
                <div className="blue">
                    <div className="colo"></div>
                    <span>Blue</span>
                </div>
                <div className="red">
                    <div className="colo"></div>
                    <span>Red</span>
                </div>
                <div className="purple">
                    <div className="colo"></div>
                    <span>Purple</span>
                </div>
                <div className="green">
                    <div className="colo"></div>
                    <span>Green</span>
                </div>
                <div className="pink">
                    <div className="colo"></div>
                    <span>Pink</span>
                </div>
                <div className="brown">
                    <div className="colo"></div>
                    <span>Brown</span>
                </div>
                <div className="yellow">
                    <div className="colo"></div>
                    <span>Yellow</span>
                </div>
        </div>
        )
        }
    </div>
  )
}

export default Colors