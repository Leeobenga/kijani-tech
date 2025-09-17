import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Footer from "../components/footer";
import ecologoImpact from "../assets/leaf2.jpg";
import farming from "../assets/nel-ranoko.webp";
import tractor from "../assets/tractor.webp";

const Impact = () => {
  const impactRef = useRef(null);

  useEffect(() => {
    // Add visible class to trigger animations after a short delay
    const timer = setTimeout(() => {
      if (impactRef.current) {
        impactRef.current.classList.add("visible");
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="main-contact-container">
        <nav className="contact-navbar">
          <span>
            <img src={ecologoImpact} alt="ecologo" width="35" className="ecologo"/>
            Mkulima Green Solutions
          </span>
          <ul>
            <li><Link to="/home" className="contact-nav-link">Home</Link></li>
            <li><Link to="/about" className="contact-nav-link">About us</Link></li>
            <li><Link to="/solutions" className="contact-nav-link">Solutions</Link></li>
            <li><Link to="/Impact" className="contact-nav-link">Impact</Link></li>
            <li><Link to="/resources" className="contact-nav-link">Resources</Link></li>
            <li><Link to="/contact" className="contact-nav-link"><button id="contact">Contact</button></Link></li>
          </ul>
        </nav> 
        
        <div className="impact" ref={impactRef}>
          <div className="impact-header animate-text">
            <h1>Empowering Farmers, Transforming Lives</h1>
            <p>Since our journey began, we have been committed to making a real difference
              in the lives of farmers and rural communities
            </p>
          </div>
          
          <div className="achievement-img-container animate-text">
            <img src={farming} alt="farming" className="achievement-img" />
          </div>
          
          <div className="achievement animate-text">
            <h1>What we have achieved so far</h1>
            <ul>
              <li>Increased Crop Yields - Farmers can now grow more food all year </li>
              <li>Water Efficiency - Up to 60% less water used compared to traditional methods</li>
              <li>Economic Growth - More harvests and therefore more income for farmers</li>
              <li>Women & Youth Empowerment - Creating sustainable green jobs in agriculture</li>                        
            </ul>
          </div>
          
          <div className="goal animate-text">
            <h1>Our Goal by 2026</h1>
            <div className="main-goal">
              <img src={tractor} alt="tractor" className="goal-img" />
              <ul>
                <li>1000+ farmers using solar irrigation solutions</li>
                <li>50+ rural communities with improved access to water</li>
                <li>Expansion beyond Kenya to the wider East African Region</li>
              </ul>
            </div>                
            <p className="goal-statement">Together, we are building a future where every farmer thrives</p>
          </div>
        </div>
      </div>
      <Footer />
      
      <style jsx>{`
        /* Animation styles only - won't interfere with your existing CSS */
        .impact .animate-text {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease, transform 1s ease;
        }
        
        .impact.visible .animate-text {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Stagger the animations for each section */
        .impact.visible .impact-header {
          transition-delay: 0.8s;
        }
        
        .impact.visible .achievement-img-container {
          transition-delay: 1.6s;
        }
        
        .impact.visible .achievement {
          transition-delay: 3.2s;
        }
        
        .impact.visible .goal {
          transition-delay: 4.3s;
        }
      `}</style>
    </>    
  );
};

export default Impact;