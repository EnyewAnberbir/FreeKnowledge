import React from 'react'
import "./About.css"
import about_img from "../../assets/web5.jpg"
import play_icon from "../../assets/web6.webp"
const About = () => {
  return (
    <div className='about'>
        <div className='about_left'>
            <img className='about_img' src={about_img} alt="" />
            <img className="play_icon" src={play_icon} alt="" />
        </div>
        <div className='about_right'>
            <h3>About ELearning </h3>
            <h2>Nurturing Tommorow's Leader Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Voluptatibus aut itaque excepturi maiores 
                perspiciatis odit. Doloremque, ullam velit rem 
                aspernatur magnam quis optio fugiat ab molestiae 
                praesentium animi accusantium nesciunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Voluptatibus aut itaque excepturi maiores 
                perspiciatis odit. Doloremque, ullam velit rem 
                aspernatur magnam quis optio fugiat ab molestiae 
                praesentium animi accusantium nesciunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Voluptatibus aut itaque excepturi maiores 
                perspiciatis odit. Doloremque, ullam velit rem 
                aspernatur magnam quis optio fugiat ab molestiae 
                praesentium animi accusantium nesciunt.</p>

        </div>

    </div>
  )
}

export default About