import React, { useState } from 'react'

function Price() {

    const [ischeck,setIscheck]=useState(false);

    const handle=()=>{
        setIscheck(!ischeck)
    }

  return (
    <div>
        <div className="price" onClick={handle}>
                <h4>Price</h4>
                <h4 >{ischeck?'_' : "+"}</h4>
        </div>
            
            { ischeck &&(
                <div className="check_box">
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >$0 - $50</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >$50 - $100</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >$100 - $200</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >$200 - $250</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >$250 - $300</label>
                </div>
                </div>
            )}
    </div>
  )
}

export default Price