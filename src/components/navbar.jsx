import { Link } from "react-router-dom"
import ecologo from "../assets/leaf2.jpg"

const PageNavbar = () => {
    return (
    <>
        <nav className="contact-navbar">
            <span>
                <img src={ecologo} alt="ecologo" width="35" className="ecologo"/>
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
    </>
    
     
)
}

export default PageNavbar