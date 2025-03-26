import { Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
            <header>
                <div className="video-container">
                    <video autoPlay muted loop >
                        <source src="/src/assets/plants-growing - Made with Clipchamp_1740105494706.mp4" type="video/mp4" />
                    </video>
                    <nav id="navbar">
                        <span>
                            <img src="/src/assets/leaf2.jpg" alt="ecologo" width="35" className="ecologo" />
                            Mkulima Green Solutions
                        </span>
                        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                            ☰
                        </div>
                        <ul className={menuOpen ? "show" : ""}>
                            <li><Link to="/home" className="nav-link">Home</Link></li>
                            <li><Link to="/about" className="nav-link">About us</Link></li>
                            <li><Link to="/solutions" className="nav-link">Solutions</Link></li>
                            <li><Link to="/Impact" className="nav-link">Impact</Link></li>
                            <li><Link to="/resources" className="nav-link">Resources</Link></li>
                            <li><Link to="/contact" className="nav-link"><button id="contact">Contact</button></Link></li>
                        </ul>
                    </nav>
                    <div className="overlay">
                        <h1>EMPOWERING THE FUTURE OF SMALLHOLDER FARMERS</h1>
                        <p>Providing a cost-effective, sustainable and energy-efficient solution by replacing expensive fuel solar pumps with solar energy</p>
                    </div>
                    <div id="overlay-button">
                        <button id="join-btn" type="button">Join Us Now <span>»</span></button>
                    </div>
                    <div className="overlay2">
                        <span>FACEBOOK</span>
                        <span>INSTAGRAM</span>
                        <span>TWITTER</span>
                        <span>LINKEDIN</span>
                    </div>
                </div>        
            </header>
    )    
}

export default Header