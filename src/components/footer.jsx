import assetsIcon2 from "/src/assets/icons8-location-50.png"
import phoneIcon from "/src/assets/icons8-phone-50.png"
import emailIcon from "/src/assets/icons8-email-50.png"
import leaf3 from "/src/assets/leaf2.jpg"
import fbIcon from "/src/assets/icons8-facebook-30.png"
import xIcon from "/src/assets/icons8-x-50.png"
import instaIcon from "/src/assets/icons8-instagram-50.png"
import linkedIcon from "/src/assets/icons8-linkedin-30.png"
import environmentProtection from "/src/assets/environmental-protection-326923.webp"
import calendarIcon from "/src/assets/icons8-calendar-20.png"
import forestImg from "/src/assets/bavarian-forest-3385966.webp"
import sendIcon from "/src/assets/icons8-send-30 (1).png"
import copyright from "/src/assets/icons8-copyright-10.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
    <div className="about-us">
        <div className="location">
            <article className="location-info">
                <div className="location-info-img-container">
                    <img src={assetsIcon2} alt="location" className="location-info-img" />
                </div>
                <div className="contact-info">
                <h2>Our Location</h2>
                <p>2416 Muthangari Drive</p>
                <p>00100 Westlands</p>
                </div>
            </article>
            <article className="location-info">
                <div className="location-info-img-container">
                    <img src={phoneIcon} alt="phone" className="location-info-img" />
                </div>
                <div className="contact-info">
                    <h2>Call us</h2>
                    <p>Telephone : +254729726505</p>
                    <p>Mobile : +254729726505</p>
                </div>                
            </article>
            <article className="location-info">
                <div className="location-info-img-container">
                    <img src={emailIcon} alt="" className="location-info-img" />
                </div>
                <div className="contact-info">
                    <h2>Our Email</h2>
                    <p>info@mkulimagreensolutions.com</p>
                    
                </div>  
            </article>
        </div>
        <div className="more-about-us">
            <div className="highlights">
                <h2><div className="highlight-image-container"><img src={leaf3} alt="icon" className="highlight-img" /></div>Mkulima Solutions</h2>
                <p>Protecting biodiversity and natural habitats is crucial for maintaining a healthy and sustainable ecology.</p>
                <span className="social-logo-container">
                    <a href="#" className="social-link"><img src={fbIcon} alt="facebook" className="social-logo" /></a>
                    <a href="#" className="social-link"><img src={xIcon} alt="x" className="social-logo" /></a>
                    <a href="#" className="social-link"><img src={instaIcon} alt="instagram" className="social-logo" /></a>
                    <a href="#" className="social-link"><img src={linkedIcon} alt="linkedin" className="social-logo" /></a>
                </span>
            </div>
            <div className="highlights quick-links">
                <h2>Quick Link</h2>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/solutions">Solutions</Link></li>
                    <li><Link to="/impact">Impact</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                </ul>
            </div>
            <div className="highlights recent-news">
                <h2>Recent News</h2>
                <div className="news">
                    <div className="news-img-container">
                        <img src={environmentProtection} alt="environment" className="news-img" />
                    </div>
                    <div className="news-title">
                        <h3>Go green and reduce your carbon...</h3>
                        <div className="news-calendar">
                            <img src={calendarIcon} alt="calendar" className="calendar" />
                            <span className="calendar-date">April 3, 2023</span>
                        </div>
                    </div>
                </div>
                <div className="news">
                    <div className="news-img-container">
                        <img src={forestImg} alt="forest" className="news-img" />
                    </div>
                    <div className="news-title">
                        <h3>Make a statement support to the eco...</h3>
                        <div className="news-calendar">
                            <img src={calendarIcon} alt="calendar" className="calendar" />
                            <span className="calendar-date">April 3, 2023</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlights" id="newsletter-title">
                <h2>Newsletter</h2>
                <p>Your opinion is important to us. So contact us for any service</p>
                <input type="email" placeholder="Your Email Address" className="newsletter-input" /><button className="newsletter-btn"><img src={sendIcon} alt="send" /></button>
            </div>
        </div>
        <footer>
            <span><img src={copyright} alt="copyright" className="copyright" />Copyright 2025 Mkulima Green Solutions All Rights Reserved</span>
            <span>Privacy Policy  |  Terms & Conditions  |  Join Us</span>
        </footer>
    </div>
    )
}

export default Footer