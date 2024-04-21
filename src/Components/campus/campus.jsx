import React from 'react'
import "./campus.css"
import pic1 from "../../assets/pp1.jpeg"
import pic2 from "../../assets/pp2.jpeg"
import pic3 from "../../assets/pp3.jpeg"
import pic4 from "../../assets/pp4.jpeg"
const campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
            <img src={pic3} alt="" />
            <img src={pic4} alt="" />
        </div>
        <button>See more here</button>

    </div>
  )
}

export default campus