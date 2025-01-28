import { useState, useEffect, useCallback, useMemo } from "react";
import "./Slide.css";
import image1 from "../assets/Academy-removebg-preview.png";
import image2 from "../assets/Club-removebg-preview.png";
import image3 from "../assets/CoNetWorKing.png";
import image4 from "../assets/Alien-removebg-preview.png";
import image5 from "../assets/sterling-silver-hexagon-stud-earrings-24k-gold-both-62a0e926b7574.png";
import image6 from "../assets/Investing.png";
import image7 from "../assets/NOAA.png";
import image8 from "../assets/ONU.png";
import image9 from "../assets/COSPAR.png";
import image10 from "../assets/FAO.png";
import image11 from "../assets/IMF.png";
import image12 from "../assets/Bit2Me.png";

// Move the images array outside the component
const images = [
  { image: image1, alt: "Image 1" },
  { image: image2, alt: "Image 2" },
  { image: image3, alt: "Image 3" },
  { image: image4, alt: "Image 4" },
  { image: image5, alt: "Image 5" },
  { image: image6, alt: "Image 6" },
  { image: image7, alt: "Image 7" },
  { image: image8, alt: "Image 8" },
  { image: image9, alt: "Image 9" },
  { image: image10, alt: "Image 10" },
  { image: image11, alt: "Image 11" },
  { image: image12, alt: "Image 12" },
];

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Adjust slidesToShow based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setSlidesToShow(1);
      else if (window.innerWidth <= 768) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoize slides to avoid unnecessary recalculations
  const slides = useMemo(() => {
    const result = [];
    for (let i = 0; i < images.length; i += slidesToShow) {
      result.push(images.slice(i, i + slidesToShow));
    }
    return result;
  }, [slidesToShow]);

  // Memoize the nextSlide function
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides]);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Auto-slide every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [nextSlide]);

  return (
    <div className="custom-slider-container">
      <button
        className="slider-prev"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
          )
        }
      >
        &#8249;
      </button>
      <div className="custom-slider">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              {slide.map((image, idx) => (
                <div className="image-container" key={idx}>
                  <img src={image.image} alt={image.alt} className="slider-image" />
                  <button className="mint-button">Mint Now</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className="slider-next" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Slide;
