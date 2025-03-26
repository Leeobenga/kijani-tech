import { Link } from "react-router-dom"
import Footer from "../components/footer"
import iconLeaf from "../assets/leaf2.jpg"
import pumpkin from "../assets/pumpkin.jpg"
import solarPanel from "../assets/solar-panel.jpg"

const About = () => {
    return (
    <>    
        <div className="main-contact-container">
            <nav className="contact-navbar">
                <span>
                    <img src={iconLeaf} alt="ecologo" width="35" className="ecologo"/>
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
            <div className="about">
                <div className="about-header">
                    <h1>About Us</h1>
                    <p>At Mkulima Green Solutions, we are on a mission to transform the agricultural landscape in Kenya. We believe that every farmer deserves access to reliable, cost-effective and sustainable farming solutions</p>
                </div>
                <div className="vision">
                    <img src={pumpkin} alt="vegetables" className="vision-img" />
                    <div className="vision-statement">
                        <h1> Our Vision</h1>
                        <p>To build a food-secure Africa by equipping farmers with climate-smart technologies</p>
                    </div>                    
                </div>
                <div className="about-mission">
                    <img src={solarPanel} alt="solar-panel" className="about-mission-img" />
                    <div className="misssion-statement">
                        <h1> Our Mission</h1>
                        <p>To empower smallholder farmers and rural communities through solar-powered irrigation and sustainable agricultural practices, making farming more efficient, profitable and eco-friendly</p>
                    </div>
                </div>
                <div className="matters">
                    <h1>Why it Matters</h1>
                    <ul>
                        <li>Climate change is affecting crop yields due to unpredictable rainfall.</li>
                        <li>Many farmers lack affordable irrigation options</li>
                        <li>Food security depends on innovative solutions</li>
                    </ul>
                </div>
                <div className="about-end">
                    <p>Joins us as we build a greener, more resilient future for agriculture</p>
                </div>
            </div>
        </div>
        <Footer />
    </>
        
    )
}

export default About;