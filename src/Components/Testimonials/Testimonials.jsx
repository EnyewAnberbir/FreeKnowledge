import React, {useRef} from 'react'
import "./Testimonials.css"
import next_btn from "../../assets/next_btn.png"
import back_btn from "../../assets/back_btn.png"
import user_1 from "../../assets/user_1.jpeg"
import user_2 from "../../assets/user_2.jpeg"
import user_3 from "../../assets/user_3.jpeg"
import user_4 from "../../assets/user_4.jpeg"

const Testimonials = () => {

    const slider = useRef();
    let tx = 0

    const slideForward = () =>{
        if(tx > -50){
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className='testimonials'>
        <img src={next_btn} alt=""  className='next_btn' onClick={slideForward}/>
        <img src={back_btn} alt="" className='back_btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={user_1 } alt="" />
                            <div>
                                <h3>Enyew Anberbir</h3>
                                <span>AA, Ethiopia</span>
                            </div>
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Tenetur, minima placeat, libero amet et pariatur sit 
                            voluptatibus deleniti magni quis, asperiores eaque earum 
                            temporibus dolores nihil eius vero odit quas.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={user_2 } alt="" />
                            <div>
                                <h3>Enyew Anberbir</h3>
                                <span>AA, Ethiopia</span>
                            </div>
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Tenetur, minima placeat, libero amet et pariatur sit 
                            voluptatibus deleniti magni quis, asperiores eaque earum 
                            temporibus dolores nihil eius vero odit quas.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={user_3 } alt="" />
                            <div>
                                <h3>Enyew Anberbir</h3>
                                <span>AA, Ethiopia</span>
                            </div>
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Tenetur, minima placeat, libero amet et pariatur sit 
                            voluptatibus deleniti magni quis, asperiores eaque earum 
                            temporibus dolores nihil eius vero odit quas.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={user_4 } alt="" />
                            <div>
                                <h3>Enyew Anberbir</h3>
                                <span>AA, Ethiopia</span>
                            </div>
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Tenetur, minima placeat, libero amet et pariatur sit 
                            voluptatibus deleniti magni quis, asperiores eaque earum 
                            temporibus dolores nihil eius vero odit quas.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials