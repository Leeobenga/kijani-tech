import { useState, useEffect } from "react"
import greenHouse from "/src/assets/greenhouse-3247181_1920.jpg"
import renewable from "/src/assets/renewable-1989416.jpg"
import safetyCareIcon from "/src/assets/icons8-safety-care-48.png"
import paymentHistoryIcon from "/src/assets/icons8-payment-history-48.png"
import irrigationSystem from "/src/assets/irrigation-7262563.jpg"
import assetsIcon from "/src/assets/icons8-safety-care-48.png"

const Objectives = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 560);
    const objectives = [
        {
            title: "Food Security",
            desc: "Providing a sustainable and cost-effective water supply, these pumps enable year-round farming.",
            img: greenHouse,
            icon: safetyCareIcon
        },
        {
            title: "Economic Resilience",
            desc: "Reducing reliance on expensive fuel-powered systems, increasing farmers' profits all year round.",
            img: renewable,
            icon: paymentHistoryIcon
        },
        {
            title: "Environmental Sustainability",
            desc: "Providing efficient water use and reducing carbon emissions by replacing petrol-powered systems.",
            img: irrigationSystem,
            icon: assetsIcon
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 560);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isSmallScreen) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % objectives.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isSmallScreen, objectives.length]);

    return (
        <div className="objectives">
            <section className="heading">
                <h4>OUR OBJECTIVES</h4>
                <h1>Promoting Sustainable Agricultural Practices</h1>
            </section>
            <div className="slider-container">
                <div className="cards" style={ isSmallScreen ? {transform: `translateX(-${currentIndex * 100}%)`} : {}}>
                    {objectives.map((obj, index) => (
                        <article key={index} className={`service ${index === currentIndex ? "active" : ""}`}>
                            <div className="img-div">
                                <img src={obj.icon} alt="icon" / >
                            </div>
                            <h3>{obj.title}</h3>
                            <p>{obj.desc}</p>
                            <img src={obj.img} alt={obj.title} className="food-secure" />
                        </article>
                    ))}
                </div>
            </div>            
            {isSmallScreen && (
                <div className="obj-dots">
                    {objectives.map((_, index) => (
                        <span
                            key={index}
                            className={`obj-dot ${index === currentIndex ? "active-dot" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
                  
            )}
        </div>
    )
}

export default Objectives