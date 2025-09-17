import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Footer from "../components/footer";
import ecologoSolution from "../assets/leaf2.jpg";
import weatherSensors from "../assets/Weather-Sensors.jpg";
import irrigationSolution from "../assets/irrigation2.webp";
import paymentSolution from "../assets/banking.webp";
import digitalMarketing from "/src/assets/digital-marketing.webp";

const Solution = () => {
  const solutionRef = useRef(null);

  useEffect(() => {
    // Add visible class to trigger animations after a short delay
    const timer = setTimeout(() => {
      if (solutionRef.current) {
        solutionRef.current.classList.add("visible");
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="main-contact-container">
        <nav className="contact-navbar">
          <span>
            <img src={ecologoSolution} alt="ecologo" width="35" className="ecologo"/>
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
        
        <div className="solution" ref={solutionRef}>
          <div className="solution-header animate-text">
            <h1>Our Solutions</h1>
            <p>We provide affordable, pay-as-you-go(PAYG) solar irrigation systems designed for 
            smallholder farmers, ensuring efficient water use and year-round farming
            </p>
          </div>
          
          <p className="problem animate-text">Our solutions include:</p>
          
          <div className="irrigation animate-text">
            <div className="irrigation-statement">
              <h1>Solar-Powered Irrigation</h1>
              <ul>
                <li>Uses renewable energy to power water pumps</li>
                <li>Reduces dependency on rainfall</li>
                <li>Cuts down costs on fuel and electricity</li>
              </ul>
            </div>   
            <img src={irrigationSolution} alt="irrigation" className="irrigation-img" />                 
          </div>
          
          <div className="payment animate-text">
            <div className="payment-statement">
              <h1>Flexible Payment Model</h1>
              <ul>
                <li>Pay in small installments, just like M-Pesa's M-Gas system.</li>
                <li>No upfront cost-start farming immediately!</li>                        
              </ul>
            </div>
            <img src={paymentSolution} alt="payment" className="payment-img" />
          </div>
          
          <div className="technology animate-text">
            <div className="technology-statement">
              <h1>Technology-Driven Growth</h1>                        
              <ul>
                <li>
                  <span className="techInsight">AI-Driven Smart Sensors:</span><br />
                  Our irrigation systems are equipped with intelligent sensors that 
                  utilize Artificial Intelligence to analyze field data, including 
                  soil moisture levels, crop growth patterns, and weather trends. 
                  This enables precise irrigation scheduling and resource optimization.
                </li>
                <li>
                  <span className="techInsight">Data-Driven Decision Making:</span><br />
                  By leveraging AI analytics, we provide farmers with real-time insights,
                  allowing for informed decisions that improve yields and reduce waste.
                </li>
              </ul>
            </div>
            <div id="techImages">
              <img src={weatherSensors} alt="weather-seansors" id="tech-img1" />
              <img src={digitalMarketing} alt="tech" id="tech-img2" />                       
            </div>                    
          </div>
        </div>
      </div>
      <Footer />
      
      <style jsx>{`
        /* Animation styles only - won't interfere with your existing CSS */
        .solution .animate-text {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .solution.visible .animate-text {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Stagger the animations for each section */
        .solution.visible .solution-header {
          transition-delay: 0.8s;
        }
        
        .solution.visible .problem {
          transition-delay: 1.6s;
        }
        
        .solution.visible .irrigation {
          transition-delay: 3s;
        }
        
        .solution.visible .payment {
          transition-delay: 5.4s;
        }
        
        .solution.visible .technology {
          transition-delay: 6.8s;
        }
      `}</style>
    </>
  );
};

export default Solution;