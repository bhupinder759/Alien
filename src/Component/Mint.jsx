import React from 'react'
import "./Mint.css";
import alien from "../assets/fluent-emoji_alien.svg";

const Mint = () => {
  return (
    <>
    <div className="mintsection">
      <div className="mint-heading">
        <h2>Alien TRIP</h2>
        <img src={alien} alt="" />
      </div>

      <div className="mint-container">
        <div className="mint-boxes">
          {/* Left Container */}
          <div className="mint-container__item left">
            <h3>Phase 1</h3>
            <h4>Conceptualization & Design:</h4>
            <p>Define the token concept and create branding elements.</p>
          </div>
          {/* mintright Container */}
          <div className="mint-container__item mintright">
            <h3>Phase 2</h3>
            <h4>Tokenomics Research and Design:</h4>
            <p>Explore tokenomics models and design incentives for holders.</p>
          </div>
        </div>

        <div className="mint-boxes">
          {/* Left Container */}
          <div className="mint-container__item left">
            <h3>Phase 3</h3>
            <h4>Smart Contract and Token Minting:</h4>
            <p>Develop and deploy a secure smart contract for token creation.</p>
          </div>
          {/* mintright Container */}
          <div className="mint-container__item mintright">
            <h3>Phase 4</h3>
            <h4>Community Development, Social Media, and Website:</h4>
            <p>Build an engaged community through social media and website presence.</p>
          </div>
        </div>,

        <div className="mint-boxes">
          {/* Left Container */}
          <div className="mint-container__item left">
            <h3>Phase 5</h3>
            <h4>Presale:</h4>
            <p>Conduct an initial sale phase to raise liquidity and bootstrap token distribution.</p>
          </div>
          {/* mintright Container */}
          <div className="mint-container__item mintright">
            <h3>Phase 6</h3>
            <h4>Marketing:</h4>
            <p>Execute marketing campaigns to increase token reach and awareness.</p>
          </div>
        </div>

        <div className="mint-boxes">
          {/* Left Container */}
          <div className="mint-container__item left">
            <h3>Phase 7</h3>
            <h4>DEX Token Launch and Permanent Liquidity Lock:</h4>
            <p>Launch the token on decentralized exchanges and lock liquidity to ensure stability.</p>
          </div>
          {/* mintright Container */}
          <div className="mint-container__item mintright">
            <h3>Phase 8</h3>
            <h4>Ecosystem Expansion and Future Projects:</h4>
            <p>Expand the ecosystem through ongoing development and introduce future projects.</p>
          </div>
        </div>

        </div>
    </div>

    
  
    </>
  )
}

export default Mint
