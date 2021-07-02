import React from 'react'
import './About.css'
import image from './about_image.jpg';
const About = () => {
    return (
        <>
            <h1 class="heading2">About</h1>
      <img src={image} class="image_about" alt="Lol"></img>
    <p class="para1">
      Founded in the year 2009, ROBODEX is the Robotics club of Delhi Public
      School Dwarka, New Delhi. The club began with only 5 members as
      intra-house activity. Within an years time we grew to conduct our
      first inter school event in the year 2010.
    </p>
    <p class="para2">
      "Innovation is the outcome of a habit not a random act"
    </p>
    <p class="para3">
      Keeping this in mind, we at Robodex-The robotics club of D.P.S. Dwarka conduct inter-school and intra-school
      events every year.
            </p>
            </>
    )
}

export default About
