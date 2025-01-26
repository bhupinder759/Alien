import React from 'react'
import "./Academy.css";
// import CustomSlider from "./CustomSlider";
import Slide from "./Slide.jsx";
import sampleImage from "../assets/undraw_printing-invoices_osgs (2).png";
import leftimage from "../assets/Absolute_Reality_v16_Academy_AlienFlowSpace_1.jpg";
import rightimage from "../assets/Absolute_Reality_v16_AlienFlowSpace_DAO_1.jpg";

const Academy = () => {
  return (
    <>

        <section className="academy-section1">
          <div className="academy-container">
            {/* Left Container */}
            <div className="academy-left-container">
              <h1>
              Academy
              </h1>
              <h3>Access Now to Learn and Earn!</h3>
              <p>
              Acquire Mindfulness Capacities, to Discover Knowledge & Skills; that will help you Evolve and Propel You to the Optimal Experience in Fullness of Flow; How to improve the Benefits in Your Quality of Life with Sustainable Gains, obtaining Full Mental Well-being, Growth & Development, on a Personal & Professional level, Exploring both ancestral techniques and cutting-edge technologies... Connect on a deeper level With yourself, Your World & this Planet,
              </p>
              <div className="academy-box">
                <p>Start Your Transformation Now!</p>
              </div>
            </div>
    
            {/* Right Container */}
            <div className="academy-right-container">
              <img src={sampleImage} alt="Placeholder" />
            </div>
          </div>
        </section>
    
      {/* section two */}

      <div className="academy-section2">
        <div className="academy-section2-container">
          <div className="heading-div">
            <h1>Training Modules:</h1>
          </div>
          <div className="academy-section2-content">
            <img src={leftimage} alt="" />
            <div className="boxes">
              <p>Abundance & Freedom (EcoFinTech, Ecommerce)</p>
              <p>Self-management & Sustainability (Ecology, Permaculture)</p>
              <p>Harmony & Transcendence (Alchemy, Focusing Mindfulness, Meditations)</p>
            </div>
          </div>
        </div>
      </div>

      {/* section three */}

      <div className="academy-section2">
        <div className="academy-section2-container">

          <div className="heading-div">
            <h1>Training BOOTCAMPS:</h1>
          </div>

          <div className="academy-section2-content">
            <div className="boxes">
                <p>A.I. (Neural Intelligence Network</p>
                <p>Blockchain DEV)</p>
                <p>Build Web 3 Projects</p>
                <p>Code Fundamentals</p>
                <p>Quantum Computations</p>
            </div>

            <img src={rightimage} alt="" />

          </div>
        </div>
      </div>

      {/* section four */}
      <div className="academy-section3">
         <div className="academyslide">
           <Slide></Slide>
         </div>
      </div>

    </>
  )
}

export default Academy
