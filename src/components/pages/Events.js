import React from 'react'
import './Events.css'
const Events = () => {
    return (
        <>
        <h1 class="heading5">Events</h1>
    <div class="flex-event">
      <p class="salutation">Greetings!</p>
      <p class="paragraph">In these trying times it is vital for each and everyone of us to keep learning and being
        productive.So, ‘Robodex’- the robotics club of DPS Dwarka is back with ROBODEX 2020. A vivacious event which,
        through its assorted activities, creates an abstract where theory converges into practice and forms experience.
        This year, the event will witness participation of students from classes 6th to 12th</p>
    </div>
    <div class="carding">
      <div class="event1">
        <h2 class="head1">Answer and Assemble </h2>
        <h3 class="classe">For classes 6th to 8th</h3>
        <h4 class="state">Design a robot ( or 2 separate robots ) to segregate magnetic and non-magnetic waste from a
          heap of garbage and place them in separate containers.</h4>
        <button class="learn1"><a
            href="https://333eb239-14de-4d8f-9ed0-e9921b33c42b.filesusr.com/ugd/7d48fd_af31b651bc4f4cd3904151a24d8823ae.pdf" class="link_pdf">Learn More</a></button>
      </div>
      <div class="event2">
        <h2 class="head2">Covid 19 Innovation</h2>
        <h3 class="classe">For classes 9th to 12th</h3>
        <h4 class="state">To find the solution to the ongoing pandemic by designing a robot (preferably) which will help
          to overcome the challenges faced during this pandemic.
          Example was send to you in the invite earlier.</h4>
        <button class="learn2"><a
            href="https://333eb239-14de-4d8f-9ed0-e9921b33c42b.filesusr.com/ugd/7d48fd_70b2333308a74523b730069e2cf99e05.docx?dn=Robodex_inter_school_2020.doc.docx"
            class="link_pdf">Learn More</a></button>
      </div>
    </div>    
        </>
    )
}

export default Events
