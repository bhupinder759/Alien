import {useState,} from 'react'
import "./Home.css"
import tick from "../assets/Vector.svg"
import alien from "../assets/Alien-removebg-preview.png"
// import CustomSlider from "./CustomSlider.jsx"
import Slide from "./Slide.jsx";

import girl1 from "../assets/organic-bucket-hat-stone-front-6314e15c52ba3.png";
import girl2 from "../assets/classic-snapback-black-teal-front-6314e27841041.png";
import girl3 from "../assets/organic-baseball-cap-pacific-front-6314deff5dccf.png";
import girl4 from "../assets/retro-trucker-hat-navy-white-front-6277f0da688cf.png";
import girl5 from "../assets/retro-trucker-hat-rustic-orange-khaki-left-6314e3afdadb6.png";
import girl6 from "../assets/CoNetWorKing.png";
import leftimage1 from "../assets/BeInCrypto.png";
import leftimage2 from "../assets/Coinglass.png";
import leftimage3 from "../assets/Blockchaincenter.net_Logo.png";
import leftimage4 from "../assets/IAEA.png";
import leftimage5 from "../assets/ESA.png";
import leftimage6 from "../assets/OECD.png";
import leftimage7 from "../assets/WTO.png";
import leftimage8 from "../assets/TokenMetrics.png";
import leftimage9 from "../assets/LSC.png";
import facebook from "../assets/logos_facebook.svg";
import whatsapp from "../assets/logos_whatsapp-icon.svg";
import linkedin from "../assets/basil_linkedin-solid.svg";
import instagram from "../assets/skill-icons_instagram.svg";
import discord from "../assets/skill-icons_discord.svg";



const Home = () => {

  const [activeBox, setActiveBox] = useState(null);

  const toggleBox = (index) => {
    setActiveBox(activeBox === index ? null : index);
  };

  const images = [leftimage1, leftimage2,leftimage3, leftimage4, leftimage5, leftimage6, leftimage7, leftimage8, leftimage9];

  const content = [
    {
      heading: "What is AlienFlowSpace DAO?",
      paragraph:
        "AlienFlowSpace DAO is a decentralized autonomous organization that combines elements of DeFi, DeSci, GameFi, ReFi, RWA, offering a unique platform where users can access diverse experiences, products, and services, fully personalized and sustainable.",
    },
    {
      heading: "What is the AlienFlowSpace CrypToken?",
      paragraph:
        "The AlienFlowSpace CrypToken is our digital currency that allows users to access liquidity pools and redeem experiences, products, and services within our spaces, including Academy, Clubs, and CoNetWorKing.",
    },
    {
      heading: "How can I obtain the CrypToken?",
      paragraph:
        "Users can obtain the CrypToken through exchanges on cryptocurrency platforms, participating in activities within the DAO, or by providing liquidity.",
    },
    {
      heading: "What are liquidity pools?",
      paragraph:
        "Liquidity pools are pools that allow users to provide liquidity to the platform and fund initiatives in exchange for rewards. These pools are essential for the functioning of our ecosystem.",
    },
    {
      heading: "What types of experiences and products can I redeem?",
      paragraph:
        "Users can redeem the CrypToken & NFTs for various experiences, products, and services in our spaces, which include access to exclusive, fully personalized and sustainable courses, events, experiences, training, products...",
    },
    {
      heading: "How do NFT collections work?",
      paragraph:
        "The NFT collections on AlienFlowSpace offer users exclusive access to exclusive, fully personalized and sustainable activities, courses, events, experiences, training, within our spaces. Each NFT may have unique benefits, advantages, and privileges associated with it.",
    },
    {
      heading: "What is DeFi, DeSci, GameFi, ReFi, RWA?",
      paragraph:
        "DeFi: Decentralized finance that allows transactions without intermediaries. DeSci: Decentralized science that promotes collaboration and research funding. GameFi: Games that integrate financial elements, allowing players to win money. ReFi: Regenerative finance that seeks to create a positive impact on the environment. RWA: Tokenization of real-world assets.",
    },
    {
      heading: "How is the security of my funds ensured?",
      paragraph:
        "Security is a priority at AlienFlowSpace DAO. We use advanced security protocols and regular audits to protect our users' funds. Our recommendation is self-custody, although it is always the user's final responsibility to ensure they use secure wallets and keep their security keys and seed phrases safe when connecting to our DAPP and sign smart contract transactions.",
    },
    {
      heading: "Where can I get more information?",
      paragraph:
        "For more updated information about AlienFlowSpace DAO, please visit our official website or our official social media and channels. If you want more details on a specific topic or need additional help, do not hesitate to contact and ask to answer all your questions!",
    },
  ];

  return (
    <>
<div className="homepage">
      {/* Background Image */}
      <div className="homepage__image">
      
        {/* Overlay Content */}
        <div className="homepage__content">
          {/* Left Side: Heading and Subheading */}
          <div className="homepage__text">
            <h1>Explore</h1>
            <h3>The DAO EcoSystem Innovative Solutions</h3>
            <p>Unlock Energy Efficiency & Environmental Sustainability</p>
          </div>

          <div className='overimage1'>
          <img src={alien} alt="" />
          </div>

          {/* Right Side: Buttons */}
          <div className="homepage__buttons">
            <button><img src={tick} alt="" />Biological Finances (BioFi)</button>
            <button><img src={tick} alt="" />Decentralized Finance (DeFi)</button>
            <button><img src={tick} alt="" />Decentralized Science (DeSci)</button>
            <button><img src={tick} alt="" />Gaming Finance (GameFi)</button>
            <button><img src={tick} alt="" />InterPlanetaryFileSystem (IPFS)</button>
            <button><img src={tick} alt="" />Quantum Financial System  (QFS)</button>
            <button><img src={tick} alt="" />Renewable Finance (ReFi)</button>
            <button><img src={tick} alt="" />Real World Assets (RWA)</button>
            <button><img src={tick} alt="" />Social Finances (SocialFi)</button>
            <button><img src={tick} alt="" />Traditional Finances (TradFi)</button>
          </div>

          {/* images 
          <div className='overimage'>
            <img src={image1} alt="" />
            <img src={club} alt="" />
          </div>
          */}

        </div>
      </div>
    </div>

    {/* Second section */}

    <div className="section">
      {/* Background Image Container */}
      <div className="section__background">
        {/* Content with Rounded Image and Sections */}
        <div className="section__content">
          {/* First Section: Heading with Line */}
          <div className="section__heading">
            <h2>Access Cryptotoken & nfts</h2>
            <div className="section__line"></div>
          </div>

          {/* Second Section: Automatic Slider */}
          <div className="section__slider">
            <Slide />
          </div>

        </div>
      </div>
    </div>

    {/* Third section */}

    <div className="section3">
      <div className="section3__container">
        {/* Heading */}
        <div className="section3__heading">
          <h2>Financial Freedom</h2>
          <div className="section3__line"></div>
        </div>

        {/* Images */}
        <div className="section3__images">
          <img src={girl1} alt="Image 1" />
          <img src={girl2} alt="Image 2" />
          <img src={girl3} alt="Image 3" />
        </div>

        {/* Paragraph */}
        <p className="section3__paragraph">
        Any Individual or Profesional can Understand the Advantage of Digital Money · Impartial Money that does not discriminate, Decentraliced Currencies, Stable without Volatility, As Well As Safe Reserves of Values. Access with Crypto, NFTs, Tokens to Order & Generate All Types of Experiences, Products & Services According to your Demands Instantly...
        </p>
      </div>
    </div>

    {/* Fourth section */}

    <div className="section4">
      <div className="section4__container">
        {/* Image 1 */}
        <div className="section4__item">
          <img src={girl4} alt="Cash Money Peer to Peer" />
          <h3>Cash Money Peer to Peer</h3>
        </div>

        {/* Image 2 */}
        <div className="section4__item">
          <img src={girl5} alt="Digital Money From P2P" />
          <h3>Digital Money From P2P</h3>
        </div>

        {/* Image 3 */}
        <div className="section4__item">
          <img src={girl6} alt="Wallet Connect Web" />
          <h3>Wallet Connect Web</h3>
        </div>
      </div>
    </div>

    {/* Fifth section */}
     
    <div className="section5">
      {/* Heading Section */}
      <div className="heading_section">
        <h2>faqs</h2>
        <div className="heading_line"></div>
      </div>

      {/* Content Section */}
      <div className="content_section">
        {/* Left Side Boxes */}
        <div className="leftboxes">
        {content.map((item, index) => (
            <div key={index} className="boxtitle">
              {/* Box Heading */}
              <p onClick={() => toggleBox(index)}>
                {item.heading}
                <span className="arrow">
                  {activeBox === index ? "▲" : "▼"}
                </span>
              </p>

              {/* Box Content */}
              {activeBox === index && (
                <div className="boxcontent">
                  <p>{item.paragraph}</p>
                </div>
              )}
              </div>
            ))}
        </div>

        {/* Right Side Images */}
        <div className="rightimages">
        {images.map((img, index) => (
            <div key={index} className="images">
              <img src={img} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* sixth section */}

    <div className="section6">
      <div className="container">
        {/* Heading */}
        <h2 className="heading">Questions?</h2>
        <p className="subtitle">
          Whether you&apos;re curious about features, a free trial, or even press
          releases, we&apos;re here to answer all your questions.
        </p>

        {/* Input and Button */}
        <div className="input-container">
          <input type="email" placeholder="Email..." className="email-input" />
          <button className="submit-btn">Submit</button>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          {/* Icons can be SVGs, images, or font icons */}
          <img src={facebook} alt="Facebook" className="icon" />
          <img src={whatsapp} alt="WhatsApp" className="icon" />
          <img src={linkedin} alt="LinkedIn" className="icon" />
          <img src={instagram} alt="Instagram" className="icon" />
          <img src={discord} alt="Discord" className="icon" />
        </div>
      </div>
    </div>


    </>
  )
}

export default Home
