
import { useState, useEffect } from "react"
import environmentProtection from "/src/assets/environmental-protection-326923.jpg"
import comment from "/src/assets/icons8-comment-48.png"
import bavarian from "/src/assets/bavarian-forest-3385966.jpg"
import recycle from "/src/assets/recycle-57136.jpg"

const Blog = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 560);
    const [index, setIndex] = useState(0);

    const articles = [
        <article className="blog">
                <div className="blog-img-container">
                    <img src={environmentProtection} alt="enviroment protection" className="blog-img" />
                    <div className="blog-date">03 <br /> Apr</div>
                </div>                    
                <h2>Go green and reduce your carbon footprint</h2>
                <p>Going green and reducing your carbon footprint are important steps towards creating…</p>
                <div className="read-more">
                    <span className="read-more-text">Read More »</span>
                    <span><img src={comment} alt="comment" className="comment-icon" />Comment <span className="comment-number">0</span></span>
                </div>
        </article>,
        <article className="blog">
                <div className="blog-img-container">
                    <img src={bavarian} alt="forest" className="blog-img" />
                    <div className="blog-date">03 <br /> Apr</div>
                </div>   
                <h2>Make a statement support to the eco</h2>
                <p>Going green and reducing your carbon footprint are important steps towards creating…</p>
                <div className="read-more">
                    <span className="read-more-text">Read More »</span>
                    <span><img src={comment} alt="comment" className="comment-icon" />Comment <span className="comment-number">0</span></span>
                </div>
        </article>,
        <article className="blog">
                <div className="blog-img-container">
                    <img src={recycle} alt="recycle" className="blog-img" />
                    <div className="blog-date">03 <br /> Apr</div>
                </div>   
                <h2>Affordable, targeted media for every one</h2>
                <p>Going green and reducing your carbon footprint are important steps towards creating…</p>
                <div className="read-more">
                    <span className="read-more-text">Read More »</span>
                    <span><img src={comment} alt="comment" className="comment-icon" />Comment <span className="comment-number">0</span></span>
                </div>
        </article>
    ];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 560);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    

const nextSlide = () => setIndex(prev => (prev + 1) % articles.length);
const prevSlide =() => setIndex(prev => (prev - 1 + articles.length) % articles.length);

return (
<div className="blogs">
    <section className="blog-heading">
        <h4>OUR LATEST BLOG</h4>
        <div className="blog-header">
            <h1>Let's checkout our all latest news</h1>
            <button className="blog-button">Read More Blogs <span className="button-span">»</span></button>
        </div>
    </section>
    <section className="cards">
        <div className="cards-holder">
            {isMobile ? (
                <>
                {articles[index]}
                <button onClick={prevSlide} className="prev-blog">◀</button>
                <button onClick={nextSlide} className="next-blog">▶</button>
                <div className="blog-dots-container">
                    {articles.map((_, i) => (<span key={i} className={`blog-dot ${index === i ? "active" : ""}`}></span>))}
                </div>                            
                </>
            ) :
            articles.map((obj, i) => (
                <div key={i}>{obj}</div>
            ))
            }
            
        </div>
    </section>
</div>
)

}


export default Blog