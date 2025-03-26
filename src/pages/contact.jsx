import { Link } from "react-router-dom"
import Footer from "../components/footer"
import ecologo from "/src/assets/leaf2.jpg"

const Contact = () => {
    return (
    <>
        <div className="main-contact-container">
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
            <div className="contact-container">
                <div id="form-side">                
                    <div className="contact-header">
                        <h1 className="get-in-touch">Get in Touch</h1>
                        <p>Want to get in touch with us? We'd love to hear from you on partnerships, financing and general enquiry. Lets make things happen together</p> 
                    </div>
                    
                    <form action="#">
                        <label htmlFor="name">Full name</label>
                        <input type="text" id="name" placeholder="Type your full name" />
                        <label htmlFor="email-address">Email address</label>
                        <input type="email" id="email-address" placeholder="example@email.com" />
                        <label htmlFor="phone">Phone number</label>
                        <input type="number" id="phone" placeholder="+00 0000 0000 00000"  />
                        <label htmlFor="business-name">Business name</label>
                        <input type="text" id="business-name" placeholder="Type your business name" />
                        <label htmlFor="reason">What is your reason for contact?</label>
                        <select name="reason" id="reason">
                            <option value="" >Choose from list here</option>
                            <option value="partnership">Become a partner</option>
                            <option value="learn-more">Learn more</option>
                        </select>
                        <label htmlFor="short-message">Drop us a short message</label>
                        <textarea type="text" id="short-message" placeholder="Please write your message below"></textarea>
                        <button type="submit" id="form-send">Send message <span className="send-char">→</span></button>    
                    </form>
                </div>     
                <div id="contact-side">
                    <h2>Reach out to us</h2>
                    <p>Mail us at info@mkulimagreens.co.ke You can also reach out using this social platform</p>
                    <div className="logo-container">
                    <a href="#" className="social-link"><img src="/src/assets/icons8-facebook-20.png" alt="facebook" className="social-logo" /></a>
                    <a href="#" className="social-link"><img src="/src/assets/icons8-x-20.png" alt="x" class="social-logo" /></a>
                    <a href="#" className="social-link"><img src="/src/assets/icons8-instagram-20.png" alt="instagram" className="social-logo" /></a>
                    <a href="#" className="social-link"><img src="/src/assets/icons8-linkedin-20.png" alt="linkedin" className="social-logo" /></a>
                    </div>
                </div>
            </div>
        </div>
        
        <Footer />
   </>
    )
}

export default Contact;