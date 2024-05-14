import React, { useState } from 'react'

function Size() {
    const [isCheck,setIscheck]=useState(false)

    function handle(){
        setIscheck(!isCheck)
    }
  return (
    <div>
        <div className="sizes" onClick={handle}>
            <h4>Size</h4>
            <h4 >{isCheck ? "-":"+"}</h4>
        </div>
      {
        isCheck && (
            <div className="size_1">
            <button>XXS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
        </div>
        )
      }
    </div>
  )
}

export default Size