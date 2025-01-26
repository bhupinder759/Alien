import React from 'react'
import "./Contact.css";
import twitterIcon from "../assets/logos_twitter.svg"; // Replace with your SVG paths
import facebookIcon from "../assets/logos_facebook.svg";
import whatsappIcon from "../assets/logos_whatsapp-icon.svg";
import linkedinIcon from "../assets/basil_linkedin-solid.svg";
import instagramIcon from "../assets/skill-icons_instagram.svg";
import discordIcon from "../assets/skill-icons_discord.svg";
import placeholderImage from "../assets/undraw_personal-email_hfut (6).png";
import image from "../assets/UC.png"


const Contact = () => {

  return (
    <>
    <section className="section1">
      <div className="container">
        {/* Left Container */}
        <div className="left-container">
          <h1>
            Let's stay <span className="highlight">connected</span>, you can
            find us here
          </h1>
          <p>
            Contact now to explore and learn more about how we can help your
            quality of life improve and your professional successes flourish; so
            that they provide you with greater and better profits.
          </p>
          <div className="icons">
            <img src={twitterIcon} alt="Twitter" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={whatsappIcon} alt="WhatsApp" />
            <img src={linkedinIcon} alt="LinkedIn" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={discordIcon} alt="Discord" />
          </div>
          <div className="email-box">
            <input type="email" placeholder="Email..." />
            <button>Submit</button>
          </div>
        </div>

        {/* Right Container */}
        <div className="right-container">
          <img src={placeholderImage} alt="Placeholder" />
        </div>
      </div>
    </section>

    {/* section two */}

    <div className="section2">
      <div className="container_image">
        <img src={image} alt="" />
      </div>
    </div>

    </>
  )
}

export default Contact
