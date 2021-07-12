import React from "react";
import './Contact.css'
const Contact = () => {
  return (
    <section>
      <h1 class="heading4">Contact</h1>
      <div class="contact_form">
        <div class="map">
        <iframe title="bruh" aria-hidden="true" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.794081442525!2d77.0452477146034!3d28.60595369203537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad327c996bf%3A0xc15d793aacb72697!2sDelhi%20Public%20School%2C%20Dwarka!5e0!3m2!1sen!2sin!4v1624378295723!5m2!1sen!2sin"></iframe>
        </div>
        <div class="school_info">
          <h4>Contact us at:</h4>
          <h3>Delhi Public School, Dwarka</h3>
          <h2>
            <b>Address: </b> Phase I, Dwarka Sector-3, Dwarka, New Delhi, Delhi
            110078
          </h2>
          <h2>
            <b>Phone: </b> 011 35045111
          </h2>
          <h2 id="mail">
            <b>Email: </b>robodexclubdpsdwarka@gmail.com
          </h2>
          <p class="infoss">
            For any queries regarding ROBODEX, feel free to contact any of the
            following:
          </p>
          <ul class="contact_numbers">
            <li>Ms. Pooja Batra: 9810164182 </li>
            <li>Ms. Shikha Sethi: 9818807952</li>
          </ul>
        </div>
      </div>
      <h1 className="contact">Contact Form</h1>
      <div className="contact_forms">
        <form action="https://formspree.io/f/mrgragyb" method="POST">
          <label>Full Name (required)</label>
        <input type="text" placeholder="Peter Parker" name="_subject" id="name" required/>
        <label>Email (required)</label>
          <input type="email" placeholder="peterparker@gmail.com" name="email" id="name" required/>
          <label>School (required)</label>
        <input type="text" placeholder="Dps Dwarka" name="school" id="name" required/>
          <label>Class / Section (required)</label>
          <input type="text" placeholder="9E" name="class/section" id="name" required/>
          <label>Message (required)</label>
          <textarea name="message" id="" cols="30" rows="10" placeholder="Message" required></textarea> 
          <button type="submit">Submit</button>
        </form>
        </div>
      <div className="social">
        <h1>Connect with us on</h1>
        <div className="icons">
        <a href="https://discord.gg/ZjwYdnKsKk" target="_blanck"><i className="fab fa-discord fa-3x"></i></a>
                <a href="https://www.instagram.com/robodex__/" target="_blanck"><i className="fab fa-instagram fa-3x"></i></a>
                <a href="/" target="_blanck"><i className="fab fa-whatsapp fa-3x" target="_blanck"></i></a>
        </div>
                
            </div>
    </section>
  );
};

export default Contact;
