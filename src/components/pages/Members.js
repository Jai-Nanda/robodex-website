import React from 'react'
import './Members.css'
import parv from './imgs/parv_b.jpg'
import saumil from './imgs/saumil_b_m.jpg'
import arnav from './imgs/arnav_b_m.jpg'
import shounak from './imgs/shounak_b_white.jpg'
import pritesh from './imgs/pritesh.jpg'
import animesh from './imgs/animesh.jpg'
import raghav_g from './imgs/raghav_g.jpg'
import raghav_b from './imgs/raghav_b.jpg'
import vedant from './imgs/vedant.jpg'
import jai from './imgs/jai_1.jpg'
const Members = () => {
    return (
      <>
        <h1 class="heading4">Members</h1>
    <div class="teacher">
      <h2 class="incharge">Teacher Incharge</h2>
      <h1 class="name1">Ms. Pooja Batra</h1>
      <h1 class="name1">Ms. Shikha Sethi</h1>
    </div>
        <div class="member_container1">
        <div class="member_card1">
          <img src={parv} alt="Parv Narang" class="parv_b"/>
          <p class="member_name1">Parv Narang</p>
          <p class="position">President</p>
        </div>
        <div class="member_card1">
          <img src={saumil} alt="Saumil Goel" class="saumil_b"/>
          <p class="member_name1">Saumil Goel</p>
          <p class="position">President</p>
        </div>
      </div>
      <div class="member_container2">
        <div class="member_card2">
          <img src={arnav} alt="Arnav Batra" class="arnav_b"/>
          <p class="member_name2">Arnav Batra</p>
          <p class="position">Vice President</p>
        </div>
        <div class="member_card2">
          <img src={shounak} alt="Shounak Dua" class="shounak_b"/>
          <p class="member_name2">Shounak Dua</p>
          <p class="position">Vice President</p>
        </div>
        </div>
        <div class="member_container2">
        <div class="member_card2">
            <img src={pritesh}alt="Arnav Batra" class="arnav_b"/>
          <p class="member_name2">Pritesh Arora</p>
          <p class="position">Secretary</p>
        </div>
        <div class="member_card2">
          <img src={vedant} alt="Vedant Arora" class="shounak_b"/>
          <p class="member_name2">Vedant Arora</p>
          <p class="position">Joint Secretary</p>
        </div>
        </div>
        <div class="member_container2">
        <div class="member_card2">
          <img src={animesh}alt="Arnav Batra" class="arnav_b"/>
          <p class="member_name2">Animesh Sobti</p>
          <p class="position">Joint Secretary</p>
        </div>
        <div class="member_card2">
          <img src={jai} alt="Shounak Dua" class="shounak_b"/>
          <p class="member_name2">Jai Nanda</p>
          <p class="position">Tech Head</p>
        </div>
        </div>
        <div class="member_container2">
        <div class="member_card2">
          <img src={raghav_g} alt="Arnav Batra" class="arnav_b"/>
          <p class="member_name2">Raghav Grover</p>
          <p class="position">Tech Head</p>
        </div>
        <div class="member_card2">
          <img src={raghav_b} alt="Arnav Batra" class="arnav_b"/>
          <p class="member_name2">Raghav Bansal</p>
          <p class="position">Logistics Head</p>
          </div>
        </div>
        <div class="card1" id="card_s">
        <h2 class="class">Senior Members</h2>
        <p class="membername">Moulik Bharija</p>
        <p class="membername">Arsh Handa</p>
        <p class="membername">Keshav Goel </p>
      </div>

    <div class="cardflex1">
        <div class="card1">
        <h2 class="class">XI</h2>
        <p class="membername">Karmanya Bhalla</p>
        <p class="membername">Panav Sethi</p>
        <p class="membername">Aishwarya Setia</p>
        <p class="membername">Amogh Sharma</p>
        <p class="membername">Shoumik Mishra</p>
      </div>
      <div class="card1">
        <h2 class="class">X</h2>
        <p class="membername">Suyash Chauhan</p>
        <p class="membername">Keshav Sethi</p>
        <p class="membername">Anant Choudhary</p>
      </div>
    </div>
    <div class="cardflex2">
      <div class="card1">
        <h2 class="class">IX</h2>
        <p class="membername">Parth Tomar</p>
        <p class="membername">M.Sreevarshan</p>
        <p class="membername">Arjun Kanwar</p>
      </div>
      <div class="card1">
        <h2 class="class">VIII</h2>
        <p class="membername">Atharv Malik</p>
        <p class="membername">Arjun Ganbhir</p>
        <p class="membername">Aadyaa Arora</p>
        <p class="membername">Aarit Gupta</p>
        <p class="membername">Daksh Sethi</p>
      </div>
      <div class="card1">
        <h2 class="class">VII</h2>
        <p class="membername">Raghoav Sharma</p>
        <p class="membername">Sharanya Michael</p>
        <p class="membername">Shreyas Batra</p>
      </div>
    </div>
      </>
    )
}

export default Members
