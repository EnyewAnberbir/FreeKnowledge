import React from 'react'
import "./Programs.css"
import pic1 from "../../assets/web1.webp"
import pic2 from "../../assets/web2.webp"
import pic3 from "../../assets/web3.webp"
const Programs = () => {
  return (
    <div className = "Programs" >
        <div className='Program'>
            <img src={pic1} alt="pic1" />
            
        </div>
        <div className='Program'>
            <img src={pic2} alt="pic2" />
           
        </div>
        <div className='Program'>
            <img src={pic3} alt="pic3" />
            
        </div>
    </div>
  )
}

export default Programs