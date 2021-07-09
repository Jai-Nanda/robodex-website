import React from 'react'
import './HeroSection.css'
import robo from './undraw_robotics.svg'
const HeroSection = () => {
    return (
        <>
            
  <div class="homeflex">
    <h1 class="heading1">ROBODEX</h1>
            <img src={robo} alt="Robotics Svg" class="home_img"/>
            </div>
    <p class="description">We are a group of technology enthusiasts who aim at nurturing the spirit of inquiry in young minds</p>
    <button className="btn-register"><a href="/Register">Register</a></button>         
        </>
    )
}

export default HeroSection
