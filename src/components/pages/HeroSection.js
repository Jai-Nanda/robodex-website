import React from 'react'
import './HeroSection.css'
import robo from './undraw_robotics.svg'
const HeroSection = () => {
    return (
        <section>
            
  <div class="homeflex">
                <div className="textflex">
                <h1 class="heading1">ROBODEX</h1>
    <p class="description">We are a group of technology enthusiasts who aim at nurturing the spirit of inquiry in young minds !</p>
    <div className="buttons">
                    <button className="btn-register"><a href="/RegisterIntra">Register for Intra</a></button>
    <button className="btn-register"><a href="/RegisterInter">Register for Inter</a></button>      
      </div>
      </div>
            <img src={robo} alt="Robotics Svg" class="home_img"/>
            </div>
        </section>
    )
}

export default HeroSection
