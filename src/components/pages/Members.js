import React from 'react'
import './Members.css'
const Members = () => {
    return (
        <>
            <h1 className="heading3">Members</h1>
    <div className="teacher">
      <h2 className="incharge">Teacher Incharge</h2>
      <h1 className="name1">Ms. POOJA BATRA</h1>
    </div>
      <div className="flxs1">
        <div className="mem">
          <div className="parv_b"></div>
          <h4>Parv Narang</h4>
          <div className="viewer">
            <p>President</p>
          </div>
        </div>
        <div className="mem">
          <div className="arnav_b"></div>
          <h4>Arnav Batra</h4>
          <div className="viewer">
            <p>Vice President</p>
          </div>
        </div>
      </div>
      <div className="flxs2">
        <div className="mem">
          {/* <img src="./undraw_male_avatar.svg"> */}
          <h4>Saumil Goel</h4>
					<p>Tech Head</p>
        </div>

        <div className="mem">
          <div className="shounak_b"></div>
          <h4>Shounak Dua</h4>
          <div>
					<p>Secretary</p>
        </div>
      </div>
    </div>
    <div className="cardflex1">
      <div className="card1">
        <h2 className="class">XI</h2>
        <p className="membername">Ansh Talwar</p>
        <p className="membername">Moulik Bharija</p>
      </div>
      <div className="card1">
        <h2 className="class">X</h2>
        <p className="membername">Vedant Arora</p>
        <p className="membername">Pritesh Arora</p>
        <p className="membername">Keshav Goel</p>
        <p className="membername">Karmanya Bhalla</p>
        <p className="membername">Panav Sethi</p>
        <p className="membername">Aishwarya Setia</p>
        <p className="membername">Amogh Sharma</p>
        <p className="membername">Shoumik Mishra</p>
        <p className="membername">Arnimesh Sobti</p>
      </div>
      <div className="card1">
        <h2 className="class">IX</h2>
        <p className="membername">Suyash Chauhan</p>
        <p className="membername">Raghav Grover</p>
        <p className="membername">Keshav Sethi</p>
        <p className="membername">Arsh Handa</p>
        <p className="membername">Anant Choudhary</p>
      </div>
    </div>
    <div className="cardflex2">
      <div className="card1">
        <h2 className="class">VIII</h2>
        <p className="membername">Parth Tomar</p>
        <p className="membername">M.Sreevarshan</p>
        <p className="membername">Jai Nanda (Junior Tech Head)</p>
        <p className="membername">Raghav Bansal</p>
        <p className="membername">Arjun Kanwar</p>
      </div>
      <div className="card1">
        <h2 className="class">VII</h2>
        <p className="membername">Atharv Malik</p>
        <p className="membername">Arjun Gambhir</p>
        <p className="membername">Aadyaa Arora</p>
        <p className="membername">Aarit Gupta</p>
        <p className="membername">Daksh Sethi</p>
      </div>
      <div className="card1">
        <h2 className="class">VI</h2>
        <p className="membername">Raghoav Sharma</p>
        <p className="membername">Sharanya Michael</p>
        <p className="membername">Shreyas Batra</p>
                    </div>
                    </div> 
            </>
    )
}

export default Members
