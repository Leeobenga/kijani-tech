import woman from "/src/assets/tracy-photo.png"
import facebook from "/src/assets/icons8-facebook-20.png"
import x from "/src/assets/icons8-x-20.png"
import linkedIn from "/src/assets/icons8-linkedin-20.png"
import instagram from "/src/assets/icons8-instagram-20.png"
import business from "/src/assets/2x2 visa passport.jpg"

const Expert = () => {
    return (
        <div className="expert-team">
            <section className="blog-heading">
                <h4>OUR EXPERT TEAM</h4>
                <div className="blog-header">
                    <h1>Experience & our Professionals Team</h1>
                    <button className="blog-button">Our Expert Team <span className="button-span">»</span></button>
                </div>
            </section>
            <section className="expert-cards">
                <div className="expert">
                    <div className="expert-image">
                        <img src={woman} alt="CEO" className="expert-img" />
                    </div>
                    <div className="expert-details">
                        <h2>Tracy Obirika <span className="title">/ FOUNDER</span></h2>
                        <p>Blending urban perspective from Nairobi with insights from rural farm visits, leading strategic direction and innovation in climate smart agriculture.</p>
                        <div className="expert-socials-container">
                            <div className="expert-social">
                                <img src={facebook} alt="facebook" className="expert-social-logo" />
                            </div>
                            <div className="expert-social">
                                <img src={x} alt="X" className="expert-social-logo" />
                            </div>
                            <div className="expert-social">
                                <img src={linkedIn} alt="linkedin" className="expert-social-logo" />
                            </div>
                            <div className="expert-social">
                                <img src={instagram} alt="instagram" className="expert-social-logo" />
                            </div>
                        </div>                    
                    </div>
                </div>
                <div className="expert2">
                    <div className="expert-image">
                        <img src={business} alt="CEO" className="expert-img" />
                    </div>
                    <div className="expert-details">
                        <h2>Robert Obenga <span className="title">/ CTO</span></h2>
                        <p>Driving our tech vision to build scalable, human-centered solutions that transform agriculture. | </p>
                        <div className="expert-socials-container">
                            <div className="expert-social">
                                <img src={facebook} alt="facebook" className="expert-social-logo" />
                            </div>
                            <div className="expert-social">
                                <img src={x} alt="X" className="expert-social-logo" />
                            </div>
                            <div className="expert-social">
                                <img src={linkedIn} alt="linkedin" className="expert-social-logo" />
                            </div>
                            <div className="expert-social">
                                <img src={instagram} alt="instagram" className="expert-social-logo" />
                            </div>
                        </div>                    
                    </div>
                </div>
            </section>
        </div>
    )
}



export default Expert