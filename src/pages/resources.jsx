import { Link } from "react-router-dom";
import Footer from "../components/footer";
import { useState } from "react";
import eligible from "../assets/eligible.png"
import submit from "../assets/submit.png"
import installation from "../assets/installation.png";
import pay from "../assets/pay.png";
import solarSystem from "../assets/solar-system.png";
import drop from "../assets/drop.jpg";
import soil from "../assets/soil.jpg"
import renewableEnergy from "../assets/renewable.jpg";
import crops from "../assets/crops.jpg";
import neem from "../assets/neem-oil.webp";
import agroforestry from "../assets/agroforestry.jpg";
import greenWaste from "../assets/green-waste.jpg";
import education from "../assets/educate.jpg";
import ecologoResource from "../assets/leaf2.jpg"

const Resources = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [tipIndex, setTipIndex] = useState(0)

    const instructions = [
        <article className="instruction-article" id="first">
            <h1>How to Apply for our PAYG Solar Irrigation System</h1>
            <p className="tip-intro">At Mkulima Green Solutions, we've made it easy for smallholder farmers
                to access affordable solar irrigation through our Pay-As-You-Go(PAYG) model. Here's how you can apply:
            </p>
        </article>,
        <article className="instruction-article">
            <img src={eligible} alt="eligibility" className="instruct-img" />
            <h2>Step 1: Check your Eligibility</h2>
            <div className="instruct">                
                <p>To qualify for our PAYG system, you must:</p>
                <ul>
                    <li>Be a smallholder farmer in Kenya</li>
                    <li>Have access to a water source (borehole, river or well)</li>
                    <li>Commit to monthly istallment payments</li>
                </ul>
            </div>            
        </article>,
        <article className="instruction-article">
            <img src={submit} alt="submit" className="instruct-img" />
            <h2>Step 2: Submit your application</h2>
            <div className="instruct">                
                <p>Fill out our online application form on our website OR visit our nearest field office</p>
                <p>You can also apply by calling or messaging us via Whatsapp</p>
            </div>            
        </article>,
        <article className="instruction-article">
            <img src={installation} alt="install" className="instruct-img" />
            <h2>Step 3: Approval and Installation</h2>
            <div className="instruct">                  
                <p>If approved, we will review your application and conduct a site assessment</p>
                <p>If approved, we will install the solar irrigation system at no upfront cost</p>
            </div>            
        </article>,
        <article className="instruction-article">
            <img src={pay} alt="pay" className="instruct-img pay" /> 
            <h2>Step 4: Start using & Paying Flexibly</h2>
            <div className="instruct">                
                <p>Make small, flexible payments via M-Pesa or mobile banking</p>
                <p>The system remains active as long as you pay</p>
                <p>If payments stop, the system temporarily pauses until the next payment</p>
            </div>            
        </article>,
        <article className="instruction-article">
            <img src={solarSystem} alt="solar-system" className="instruct-img" /> 
            <h2>Step 5: Own the System!</h2>
            <div className="instruct">                
                <p>After completing payments, the system becomes fully yours</p>
            </div>            
        </article>,
        <article className="instruction-article last">
            <h1>Ready to apply?</h1>
            <p>Sign up now or call us to get started</p>
        </article>
    ];

    const tips = [
        <article className="tip-article tip-header">
            <h1>Top Tips for Sustainable Farming</h1>
            <p className="tip-intro">Sustainable farming helps smallholder farmers increase yields, conserve resources and protect the
                environment. Here are key tips to make your farm more sustainable:
            </p>
        </article>,
        <article className="tip-article">
            <img src={drop} alt="water-conservation" className="tip-img" />
            <h2>Conserve water with Smart Irrigation</h2>
            <ul>
                <li>Use solar-powered irrigation to reduce costs and reliance on rainfall</li>
                <li>Water crops early in the morning or late in the evening to minimize evaporation</li>
                <li>Adopt to drip irrigation to deliver water directly to plant roots, reducing waste</li>
            </ul>
        </article>,
        <article className="tip-article">
            <img src={soil} alt="soil-conservation" className="tip-img" />
            <h2>Improve Soil Health</h2>
            <ul>
                <li>Rotate crops to prevent soil depletion and improve fertility</li>
                <li>Use organic compost & manure instead of chemical fertilizers</li>
                <li>Practice to retain soil moisture and reduce weed growth</li>
            </ul>
        </article>,
        <article className="tip-article">
            <img src={renewableEnergy} alt="renewable-energy" className="tip-img" />
            <h2>Integrate Renewable Energy</h2>
            <ul>
                <li>Switch to solar-powered tools for irrigation and processing</li>
                <li>Reduce reliance on diesel or grid electricity to lower carbon emissions</li>                
            </ul>
        </article>,
        <article className="tip-article">
            <img src={crops} alt="crop-resilient" className="tip-img" />
            <h2>Choose Climate-Resilient Crops</h2>
            <ul>
                <li>Plant drought-resistant and native crops that thrive in local conditions</li>
                <li>Diversify crops to reduce risks from climate pests</li>                
            </ul>
        </article>,
        <article className="tip-article">
            <img src={neem} alt="neem-oil" className="tip-img" />
            <h2>Reduce Chemical Use</h2>
            <ul>
                <li>Use natural pesticides like neem oil instead of harmful chemicals</li>
                <li>Apply integrated pest management(IPM)-introduce beneficial insects to control pests</li>                
            </ul>
        </article>,
        <article className="tip-article">
            <img src={agroforestry} alt="agroforestry" className="tip-img" />
            <h2>Practise Agroforestry & Reforestation</h2>
            <ul>
                <li>Plant trees around farms to reduce soil erosion and improve biodiversity</li>
                <li>Use shade trees to protect crops and retain soil moisture</li>                
            </ul>
        </article>,
        <article className="tip-article">            
            <img src={greenWaste} alt="crop-resilient" className="tip-img" />
            <h2>Improve Waste Management & Recycling</h2>
            <ul>
                <li>Convert crop waste into organic fertilizers</li>
                <li>Use biodegradable packaging for farm produce</li>                
            </ul>
        </article>,
        <article className="tip-article">
            <img src={education} alt="crop-resilient" className="tip-img" />
            <h2>Train & Educate Farmers</h2>
            <ul>
                <li>Stay informed about modern sustainable farming techniques</li>
                <li>Share knowledge with farming communities for collective impact</li>                
            </ul>
        </article>,
        <article className="tip-article last">
            <h2>Sustainable farming = Healthy soil, better yields and a greener planet</h2>
        </article>
    ]

    const handleSwap = () => {
        setActiveIndex(previousIndex => (previousIndex + 1) % instructions.length);
    };

    const handleUnswap = () => {        
        setActiveIndex(previousIndex => previousIndex === 0 ? instructions.length - 1: previousIndex -1)
    };

    const handleNextTip = () => {
        setTipIndex(previousIndex => (previousIndex + 1) % tips.length);
    };

    const handlePrevTip = () => {        
        setTipIndex(previousIndex => previousIndex === 0 ? tips.length - 1: previousIndex -1)
    }


    return (
        <>
        <div className="main-contact-container">
            <nav className="contact-navbar">
                <span>
                    <img src={ecologoResource} alt="ecologo" width="35" className="ecologo"/>
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
            <div className="resources-header">
                <h1>Looking for expert insights on sustainable farming? We've got you covered!</h1>
            </div>
            <div className="resource-insights">
                <div className="insight">
                    <h2>Guides and articles</h2>
                    <p><a href="">Best practices for water conservation</a></p>
                    <p><a href="">How to maximize crop yield with solar irrigation</a></p>
                    <p><a href="">Affordable farming techniques for smallholders</a></p>
                </div>
                <div className="insight">
                    <h2>Video Tutorials</h2>
                    <p><a href="">How to install and use our solar irrigation systems</a></p>
                    <p><a href="">Tips for sustainable farming</a></p>
                </div>
                <div className="insight">
                    <h2>Partnership and Funding Opportunities</h2>
                    <p><a href="">Grants, loans & funding for smallholder farmers</a></p>
                    <p><a href="">How to apply for our PAYG model</a></p>
                </div>
            </div>
            <div className="instructions-container">
                {activeIndex > 0 && <button className="prev-button " onClick={handleUnswap}>←</button>}{instructions[activeIndex]}{activeIndex < instructions.length -1 && <button className="next-button " onClick={handleSwap}>→</button>}  
                <div className="dots-container">
                    {instructions.map((_, i) => (<span key={i} className={`dot ${activeIndex === i ? "active" : ""}`}></span>))}
                </div>               
                {tipIndex > 0 && <button className="prev-tip-button" onClick={handlePrevTip}>←</button>}{tips[tipIndex]}{tipIndex < tips.length -1 && <button className="next-tip-button" onClick={handleNextTip}>→</button>}  
                <div className="tip-dots-container">
                    {tips.map((_, i) => (<span key={i} className={`dot ${tipIndex === i ? "active" : ""}`}></span>))}
                </div>          
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Resources