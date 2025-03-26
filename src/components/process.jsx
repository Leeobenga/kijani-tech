import { useState, useEffect } from "react"
import solutionIcon from "/src/assets/icons8-solution-100.png"
import solarIcon from "/src/assets/icons8-solar-100.png"
import recycleBin from "/src/assets/icons8-recycle-bin-100.png"
import recycleIconProcess from "/src/assets/icons8-recycle-100.png"


const Process = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 560);

    const steps = [
        { img: solutionIcon, label: "Sustain Solutions" },
        { img: solarIcon, label: "Renewable Energy" },
        { img: recycleBin, label: "Green Solutions" },
        { img: recycleIconProcess, label: "Sustainable" }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 560);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % steps.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isMobile, steps.length]);

    return (
        <div className="go-green">
            <section className="process-heading">
                <h4>4 STEP PROCESS</h4>
                <h1>Go Green And Reduce Your Carbon Footprint</h1>
            </section>
            <section className="process-main" style={isMobile ? {overflow: "hidden" } : {}}>
                <div className="slider" style={isMobile ? { transform: `translateX(-${currentSlide * 100}%)`, display: "flex", transition: "transform 0.5s ease-in-out"} : { display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
                   {steps.map((step, index) => (
                    <div key={index} className="circle-container">
                        <div className="content-wrapper">
                            <div className="big-circle">
                                <img src={step.img} alt={step.label} className="process-img" />
                            </div>
                            <div className="small-circle">{index + 1}</div>
                            <p className="process-line">{step.label}</p>
                        </div>                        
                    </div>
                   ))}
                </div>
                {isMobile && (
                    <div className="obj-dots">
                        {steps.map((_, index) => (
                            <span
                                key={index}
                                className={`obj-dot ${index === currentSlide ? "active" : ""}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}

export default Process