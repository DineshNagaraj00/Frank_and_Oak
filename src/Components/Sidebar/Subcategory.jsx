import React, { useState } from 'react'

function Subcategory() {

    const [ischeck,setIscheck]=useState(false);

    const handle=()=>{
        setIscheck(!ischeck)
    }

  return (
    <div>
        <div className="subcategory" onClick={handle}>
               
                    <h4>subcategory</h4>
                    <h4 >{ischeck?'_' : "+"}</h4>
                
        </div>
            
            { ischeck &&(
                <div className="check_box">
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >Tops</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >Sweaters</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >Blazers</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >Jackets</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >Skirts</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >Dresses</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >Pants</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >Denim</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >Accessories</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" />
                    <label >Caps and Beanies</label>
                </div>
                </div>
            )}
    </div>
  )
}

export default Subcategory