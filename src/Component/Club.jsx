import React from 'react'
import "./Club.css";
import Slide from "./Slide.jsx";

const Club = () => {
  return (
    <>
         <div className="clubsection">
      {/* Background Image Container */}
      <div className="clubsection__background">
        {/* Content with Rounded Image and Sections */}
        <div className="clubsection__content">
          {/* First Section: Heading with Line */}
          <div className="clubsection__heading">
            <h2>CLUBS</h2>
            <p>Enjoy the Advantages: Benefit from exclusive, fully customizable and sustainable orders Airdrops, Events, Jewelry, Textiles, Tournaments, trips</p>
            <div className="clubbutton">
              <p>Contact</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* section two */}

    <div className="clubsection2">
      <h1>Acc€$$ CrypTokens & Nfts</h1>
      <div className="clubslide">
      <Slide></Slide>
      </div>
    </div>

    {/* section three */}

    <div className="clubsection3">
      {/* Background Image Container */}
      <div className="clubsection3__background">
        {/* Content with Rounded Image and Sections */}
        <div className="clubsection3__content">
          {/* First Section: Heading with Line */}
          <div className="clubsection3__heading">
            <h2>CLUBS</h2>
            <p>Financial and investment matters. Additionally, there are also fully customizable orders for Airdrops, events and trips.</p>
          </div>
        </div>
      </div>
    </div>

        {/* section four */}

        <div className="clubsection3">
      {/* Background Image Container */}
      <div className="clubsection4__background">
        {/* Content with Rounded Image and Sections */}
        <div className="clubsection3__content">
          {/* First Section: Heading with Line */}
          <div className="clubsection3__heading">
            <h2>Eco FLow</h2>
            <p>Enjoy fully customizable and sustainable experiences such as; gastronomy, travel and order crystals, gems, jewelry and ecological textiles such as caps, hats, visors, t-shirts, shirts, polos, jackets, sweaters, socks, bags,cases, backpacks.</p>
          </div>
        </div>
      </div>
    </div>


    {/* section five */}

    <div className="clubsection3">
      {/* Background Image Container */}
      <div className="clubsection5__background">
        {/* Content with Rounded Image and Sections */}
        <div className="clubsection3__content">
          {/* First Section: Heading with Line */}
          <div className="clubsection3__heading">
            <h2>Flow Music</h2>
            <p>We tokenize artists, works and worlds to grow and improve your musical artistic content,as well as guarantee access to concerts, tickets, events,articles, official merchandising...</p>
          </div>
        </div>
      </div>
    </div>



    </>
  )
}

export default Club
