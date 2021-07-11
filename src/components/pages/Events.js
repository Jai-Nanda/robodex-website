import React from 'react'
import './Events.css'
const Events = () => {
    return (
        <>
        <h1 class="heading5">Events</h1>
    <div class="flex-event">
      <p class="salutation">Greetings!</p>
      <p class="paragraph">In these trying times it is vital for each and everyone of us to keep learning and being
        productive. So, ‘Robodex’- the robotics club of DPS Dwarka is back with <b>ROBODEX 2021</b>. A vivacious event which,
        through its assorted activities, creates an abstract where theory converges into practice and forms experience.
        This year, the event will witness participation of students from classes 6th to 12th</p>
    </div>
    <div class="carding">
      <div class="event1">
        <h2 class="head1">Answer and Assemble </h2>
        <h3 class="classe">For classes 6th to 8th</h3>
        <h4 class="state state-exc">Use  the  given  set  of  components  and  the  components you  gain  after answering  the  questions  in  the  first  round  to  create a  robot  for  the  second round.</h4>
        <button class="learn1"><a
            href="https://drive.google.com/file/d/16j3j7NdBfPxmVk3WjucOVQfxmvIBO8IK/view?usp=sharing" target="_blanck" class="link_pdf">Learn More</a></button>
      </div>
      <div class="event2">
        <h2 class="head2">Robothon</h2>
        <h3 class="classe">For classes 9th to 12th</h3>
        <h4 class="state">Come up with  innovative  solutions  to  solve  real  life problems/challenges using  robotics    and  present-day  technologies.  Prepare a  proper presentation  for  the  same.  Provide  all  the  details including  the  circuit, design  &  mechanism.</h4>
        <button class="learn2"><a
            href="https://drive.google.com/file/d/16j3j7NdBfPxmVk3WjucOVQfxmvIBO8IK/view?usp=sharing" target="_blanck"
            class="link_pdf">Learn More</a></button>
      </div>
    </div>    
        </>
    )
}

export default Events
