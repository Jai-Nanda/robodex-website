import React from "react";
import './Contact.css'
const Contact = () => {
  return (
    <>
      <h1 class="heading4">Contact</h1>
      <div class="contact_form">
        <div class="map">
        <iframe title="bruh" aria-hidden="true" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.794081442525!2d77.0452477146034!3d28.60595369203537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad327c996bf%3A0xc15d793aacb72697!2sDelhi%20Public%20School%2C%20Dwarka!5e0!3m2!1sen!2sin!4v1624378295723!5m2!1sen!2sin"></iframe>
        </div>
        <div class="school_info">
          <h4>Reach out to us at:</h4>
          <h3>Delhi Public School, Dwarka</h3>
          <h2>
            <b>Address: </b> Phase I, Dwarka Sector-3, Dwarka, New Delhi, Delhi
            110078
          </h2>
          <h2>
            <b>Phone: </b> 011 2507 4472
          </h2>
          <h2 id="mail">
            <b>Email: </b>robodexclubdpsdwarka@gmail.com
          </h2>
          <p class="infoss">
            For any queries regarding ROBODEX, feel free to contact any of the
            following:
          </p>
          <ul class="contact_numbers">
            <li>Pooja Batra: 9810164182 </li>
          </ul>
        </div>
      </div>
        <h1 className="contact">Contact Form</h1>
        <form action="https://formspree.io/f/mdoydylb" method="POST">
          <label>Full Name</label>
          <input type="text" placeholder="Peter Parker" name="name" id="name"/>
          <label>Class / Section</label>
          <input type="text" placeholder="9E" name="name" id="name"/>
          <label>Your Query</label>
          <textarea name="desc" id="" cols="30" rows="10" placeholder="Message"></textarea> 
          <button type="submit">Submit</button>
        </form>
    </>
  );
};

export default Contact;
