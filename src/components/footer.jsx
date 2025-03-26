
const Footer = () => {
    return (
    <div className="about-us">
        <div className="location">
            <article className="location-info">
                <div className="location-info-img-container">
                    <img src="/src/assets/icons8-location-50.png" alt="location" className="location-info-img" />
                </div>
                <div className="contact-info">
                <h2>Our Location</h2>
                <p>2416 Mapleview DriveTampa,</p>
                <p>FL 33634</p>
                </div>
            </article>
            <article className="location-info">
                <div className="location-info-img-container">
                    <img src="/src/assets/icons8-phone-50.png" alt="phone" className="location-info-img" />
                </div>
                <div className="contact-info">
                    <h2>Call us</h2>
                    <p>Telephone : 0029129102320</p>
                    <p>Mobile : 000 2324 39493</p>
                </div>                
            </article>
            <article className="location-info">
                <div className="location-info-img-container">
                    <img src="/src/assets/icons8-email-50.png" alt="" className="location-info-img" />
                </div>
                <div className="contact-info">
                    <h2>Our Email</h2>
                    <p>Main Email : contact@website</p>
                    <p>ComInquiries : Info@mail.com</p>
                </div>  
            </article>
        </div>
        <div className="more-about-us">
            <div className="highlights">
                <h2><div className="highlight-image-container"><img src="/src/assets/leaf2.jpg" alt="icon" className="highlight-img" /></div>Mkulima Solutions</h2>
                <p>Protecting biodiversity and natural habitats is crucial for maintaining a healthy and sustainable ecology.</p>
                <span className="social-logo-container">
                    <a href="#" className="social-link"><img src="/src/assets/icons8-facebook-30.png" alt="facebook" className="social-logo" /></a>
                    <a href="#" className="social-link"><img src="/src/assets/icons8-x-50.png" alt="x" className="social-logo" /></a>
                    <a href="#" className="social-link"><img src="/src/assets/icons8-instagram-50.png" alt="instagram" className="social-logo" /></a>
                    <a href="#" className="social-link"><img src="/src/assets/icons8-linkedin-30.png" alt="linkedin" className="social-logo" /></a>
                </span>
            </div>
            <div className="highlights quick-links">
                <h2>Quick Link</h2>
                <ul>
                    <li><a href="#">Water Conservation</a></li>
                    <li><a href="#">Global Warming</a></li>
                    <li><a href="#">climate Adaptation</a></li>
                    <li><a href="#">Urban planning</a></li>
                    <li><a href="#">Energy Consulting</a></li>
                </ul>
            </div>
            <div className="highlights recent-news">
                <h2>Recent News</h2>
                <div className="news">
                    <div className="news-img-container">
                        <img src="/src/assets/environmental-protection-326923.jpg" alt="environment" className="news-img" />
                    </div>
                    <div className="news-title">
                        <h3>Go green and reduce your carbon...</h3>
                        <div className="news-calendar">
                            <img src="/src/assets/icons8-calendar-20.png" alt="calendar" className="calendar" />
                            <span className="calendar-date">April 3, 2023</span>
                        </div>
                    </div>
                </div>
                <div className="news">
                    <div className="news-img-container">
                        <img src="/src/assets/bavarian-forest-3385966.jpg" alt="forest" className="news-img" />
                    </div>
                    <div className="news-title">
                        <h3>Make a statement support to the eco...</h3>
                        <div className="news-calendar">
                            <img src="/src/assets/icons8-calendar-20.png" alt="calendar" className="calendar" />
                            <span className="calendar-date">April 3, 2023</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlights" id="newsletter-title">
                <h2>Newsletter</h2>
                <p>Your opinion is important to us. So contact us for any service</p>
                <input type="email" placeholder="Your Email Address" className="newsletter-input" /><button className="newsletter-btn"><img src="/src/assets/icons8-send-30 (1).png" alt="send" /></button>
            </div>
        </div>
        <footer>
            <span><img src="/src/assets/icons8-copyright-10.png" alt="copyright" className="copyright" />Copyright 2025 Mkulima Green Solutions All Rights Reserved</span>
            <span>Privacy Policy  |  Terms & Conditions  |  Join Us</span>
        </footer>
    </div>
    )
}

export default Footer