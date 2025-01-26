import React from 'react'
import "./About.css"
// import CustomSlider from "./CustomSlider";
import Slide from "./Slide.jsx";
import tickIcon from "../assets/Vector (1).svg";
import starIcon from "../assets/mdi_star.svg";
import logo from "../assets/WHO.png"
import arrow from "../assets/material-symbols_double-arrow.svg";

const About = () => {
  return (
    <>
    <section className="aboutsection1">
      <div className="aboutsection1-container">
        {/* Left Side */}
        <div className="aboutsection1-left">
          <h2>
            We offer <span>INNOVATIVE SOLUTIONS</span> with cutting-edge
            technologies such as
          </h2>
          <p>
            Improving Energy Efficiency and Environmental Sustainability,
            managing to professionally improve workflows and processes, this is
            WorkFlow.
          </p>
          <div className="buttons-container">
            <div className="button">
              <img src={tickIcon} alt="Tick" />
              <span>A.i. (Quantum Computing)</span>
            </div>
            <div className="button">
              <img src={tickIcon} alt="Tick" />
              <span>A.i. (Blockchain, Web3.0)</span>
            </div>
            <div className="button">
              <img src={tickIcon} alt="Tick" />
              <span>A.i. (Neural Intelligence Networks)</span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="aboutsection1-right">
          <div className="image-front">
          </div>
          <div className="image-back">
          </div>
        </div>
      </div>
    </section>

    {/* section two */}

    <section className="aboutsection2">
      <div className="aboutsection2_container">
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={starIcon} alt="Star Icon" className="star" />
        ))}
      </div>
      <h2 className="aboutsection2-heading">
        Crypto (DeFi + ReFi) + Photonics + Neutrinics RoadMap
      </h2>
      <div className="range-container">
        <div className="labels">
          <div className="label left">Dapps</div>
          <div className="label middle">Staking</div>
          <div className="label right">Smart Contract</div>
        </div>
        <div className="range-bar">
          <span className="range-start">0%</span>
          <div className="range-progress">
            <div className="progress-circle">
              <span>82%</span>
            </div>
          </div>
          <span className="range-end">100%</span>
        </div>
      </div>
      </div>
    </section>

    {/* section three */}

    <section className="aboutsection3">
      <div className="aboutsection3-container">
        <div className="circle-image">
          <img src={logo} alt="Circular Logo" />
        </div>
        <div className="content">
          <p>
            Our main objective is to disseminate knowledge to provide a greater understanding of wisdom in different fields and concepts, such as digitalization, efficiency, sustainability, and of course, transcendent topics. We promote the sustainable growth and development of the environment and its beings so that they can achieve a lifestyle in harmony with the cosmos and its nature. Here you will learn to interpret and improve your quality of life, as well as generate greater profits with your finances. We offer you an academy to learn and delve into the most relevant topics, clubs to meet and connect with other beings related to your interests and exchange experiences, fully customizable products and services, as well as CoNetWorKing spaces and tools establishing lasting collaborations to make the best business...
          </p>
        </div>
      </div>
    </section>

    {/* section four */}

    <section className="aboutsection4">
      <div className="aboutsection4-container">
        <div className="heading">
          <h2>Contact</h2>
        </div>

        <div className="aboutparent_container">
            <div className="content">
              <div className="headingbox">
                 <h4>Association</h4>
                 <img src={arrow} alt="" />
               </div>
               <p>We have an active, committed and dedicated community of farmers, artists, scientists, creators, developers, entrepreneurs, investment companies, researchers, businesses, users who work together, creating new functionalities, that contribute, add, multiply the initiatives and Energy Efficiency & Environmental Sustainability proposals that make this Planet a Better World.</p>
            </div>
            <div className="content">
              <div className="headingbox">
                  <h4>Decentralization</h4>
                  <img src={arrow} alt="" />
                </div>
                <p>It means that it is not controlled by a single entity, person or being. This makes it more resistant to censorship and manipulation.</p>
            </div>
            <div className="content">
              <div className="headingbox">
                  <h4>Decentralization</h4>
                  <img src={arrow} alt="" />
                </div>
                <p>Allows users to exchange their cryptos & NFTs for other assets, meaning they have more options and flexibility to manage their assets.</p>
            </div>
            <div className="content">
              <div className="headingbox">
                  <h4>Liquidity</h4>
                  <img src={arrow} alt="" />
                </div>
                <p>Offers great liquidity for users who want to buy or sell their cryptocurrencies and NFTs. This means that users can quickly and easily convert their cryptocurrencies.</p>
            </div>
            <div className="content">
              <div className="headingbox">
                  <h4>Security</h4>
                  <img src={arrow} alt="" />
                </div>
                <p>Thanks to the use of blockchain technology, quantum computing and artificial intelligence, which means that all transactions are secure and protected against fraud and hacking.</p>
            </div>
              <div className="content">
                <div className="headingbox">
                  <h4>Transparency</h4>
                  <img src={arrow} alt="" />
                </div>
                <p>This completely transparent, meaning that users can see and verify all transactions and operations that occur on blockchain networks.</p>
            </div>
            
        </div>
        </div>
    </section>

    {/* section five */}
    <div className="aboutsection5">
      <div className="aboutslide">
        <Slide></Slide>
      </div>
    </div>

    </>
  )
}

export default About
