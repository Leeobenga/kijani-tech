import { Link } from "react-router-dom";
import Footer from "../components/footer"
import ecologoSolution from "../assets/leaf2.jpg"
import irrigationSolution from "../assets/irrigation2.webp"
import paymentSolution from "../assets/banking.webp"
import digitalMarketing from "/src/assets/digital-marketing.webp"

const Solution = () => {
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
            <div className="solution">
                <div className="solution-header">
                    <h1>Our Solutions</h1>
                    <p>We provide affordable, pay-as-you-go(PAYG) solar irrigation systems designed for 
                    smallholder farmers, ensuring efficient water use and year-round farming
                    </p>
                </div>
                <p className="problem">Our solutions include:</p>
                <div className="irrigation">
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
                <div className="payment">
                    <div className="payment-statement">
                        <h1>Flexible Payment Model</h1>
                        <ul>
                            <li>Pay in small installments, just like M-Pesa's M-Gas system.</li>
                            <li>No upfront cost-start farming immediately!</li>                        
                        </ul>
                    </div>
                    <img src={paymentSolution} alt="payment" className="payment-img" />
                </div>
                <div className="technology">
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
                    <img src={digitalMarketing} alt="tech" className="tech-img" />
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Solution