import { useState, useEffect } from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import greenHouse from "/src/assets/greenhouse-3247181_1920.jpg"
import renewable from "/src/assets/renewable-1989416.jpg"
import safetyCareIcon from "/src/assets/icons8-safety-care-48.png"
import paymentHistoryIcon from "/src/assets/icons8-payment-history-48.png"
import irrigationSystem from "/src/assets/irrigation-7262563.jpg"
import assetsIcon from "/src/assets/icons8-safety-care-48.png"

const Objectives = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 464);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            item: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    

    return (
        <div className="objectives">
            <section className="heading">
                <h4>OUR OBJECTIVES</h4>
                <h1>Promoting Sustainable Agricultural Practices</h1>
            </section>
            <Carousel
                swipeable={isMobile ? true : false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                slidesToSlide={2}
                infinite={true}
                autoPlay={isMobile}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition='all .5'
                transitionDuration={500}
                containerClass='carousel-container'                                
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
                >
                
                {objectives.map((obj, index) => (
                    <div key={index} className="service">
                        <div className="img-div">
                            <img src={obj.icon} alt="icon" / >
                        </div>
                        <h3>{obj.title}</h3>
                        <p>{obj.desc}</p>
                        <img src={obj.img} alt={obj.title} className="food-secure" />
                    </div>
                ))}                
            </Carousel>
        </div>
    )
}

export default Objectives