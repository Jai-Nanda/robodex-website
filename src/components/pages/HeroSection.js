import React from 'react'
import './HeroSection.css'
import robo from './undraw_robotics.svg'
const HeroSection = () => {
    return (
        <>
            <img src={robo} alt="Robotics Svg" class="home_img"/>
            
  <div class="homeflex">
    <h1 class="heading1">ROBODEX</h1>
    <p class="description">ROBODEX, the Robotics club of DPS Dwarka comprises of die hard fanatics of technology whose
                    passion for the technological science verges on borderline crazy.</p>
                
            </div>
        </>
    )
}

export default HeroSection
