import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import pepper from "/src/assets/pepper-7200198.jpg"
import photovoltaic from "/src/assets/photovoltaic-system-2742302_1280.jpg"
import Tanzania from "/src/assets/tanzania-278361.jpg"



const Fundraising = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 560);

    const articles = [        
        {
        id: 1,
        img: pepper,
        header: "Empower a farmer with solar irrigation",
        description: "Make 120 farmers receive solar irrigation and get started with smart farming",
        goal: 45000,
        rise: 5000
        },
        {
        id: 2,
        img: photovoltaic,
        header: "Train and Equip a Climate-Smart Farmer",
        description: "600 farmers trained in smart farming to optimize production and conserve the environment",
        goal: 22500,
        rise: 8000
        },
        {
        id: 3,
        img: Tanzania,
        header: "Help Spread Awareness & Drive Change",
        description: "Expand outreach and education in rural communities on smart farming methods",
        goal: 6000,
        rise: 1500
        }
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
                setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isSmallScreen, articles.length]);

    const riseWidth = index => {
        return (articles[index].rise / articles[index].goal) * 100
    };

    const handleDonateClick = (articleId) => {
        window.location.href = `/donation?articleId=${articleId}`;
    };
    
    
    

        return (
        <div className="fundraising-causes-container">
            <section className="causes-header">
                <h4>OPEN DONATION</h4>
                <h1>Fundraising Causes</h1>
            </section>
            <div className="slider-container">
                <section className="cards" style={ isSmallScreen ? {transform: `translateX(-${currentIndex * 100}vw)`} : {}}>
                    {articles.map((obj, index) => (
                        <article key={index} id={obj.id} 
                        className={`cause ${index === currentIndex ? "active" : ""}`}>
                            <img src={obj.img} alt="greenhouse" className="cause-img" />
                            <h2>{obj.header}</h2>
                            <p>{obj.description}</p>
                            <div className="status-bar">
                                <div className="progress" style={{width:`${riseWidth(index)}%` }}></div>
                            </div>
                            <span className="goal-rise"><span className="goal">RAISED ${obj.rise}</span><span className="rise">GOAL ${obj.goal}</span></span>
                            <Link 
                                to={`/donation?articleId=${obj.id}`}                                
                            >
                                <button 
                                    className="cause-button"   
                                    onClick={() => handleDonateClick(obj.id)}                                  
                                >
                                    DONATE NOW
                                </button>
                            </Link>
                        </article>
                    ))}
                </section>
            </div>
            {isSmallScreen && (
                <div className="causes-dot">
                    {articles.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
                  
            )}
        </div>
        )
    }

export default Fundraising
