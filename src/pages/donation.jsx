import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageNavbar from "../components/navbar";
import donate from "../assets/donate.jpg";
import secondDonate from "/src/assets/donate.webp";
import { Link } from "react-router-dom";
import Footer from "../components/footer"
import "../components/Donation.css"


const Donation = ({articles}) => {      
    const [filteredArticles, setFilteredArticles] = useState([]);    
    const [searchParams] = useSearchParams();
    const [total, setTotal] = useState(0)
    let currentIndex; 

    useEffect(() => {
        if (articles) {
            const currentArticleId = parseInt(searchParams.get("articleId"), 10);                      

            if (!currentArticleId) {
                console.warn("No article ID found in query params");
            }

            const remainingArticles = articles.filter(
                article => article.id !== currentArticleId);
            setFilteredArticles(remainingArticles);            
        }
    }, [articles, searchParams]);

    const getCurrentArticle = () => {
        const currentArticleId = parseInt(searchParams.get("articleId"), 10);
        articles.map((article, index) => {
            if (article.id === currentArticleId)  {
                currentIndex = index
            }          
    });        
        return currentIndex;
    }  
    getCurrentArticle();
   
    const riseWidth = (index) => {
        return (articles[index].rise / articles[index].goal) * 100
    };

    const handleClick = amount => {
        setTotal(prevTotal => prevTotal + amount);
    };
    
    return (
        <>
         <PageNavbar />
        <div className="donation-main-container">
            <div className="first-donation-container">
                <img src={donate} alt="donate"  className="donate-img"/>
                <div className="donate-article-container">
                    <h2>Donations</h2>
                    {filteredArticles.map(article => (
                        <div key={article.id} className="donate-article">
                            <img src={article.img} alt="" className="donation-img" />
                            <div className="description">
                                <Link to={`/donation?articleId=${article.id}`} style={{textDecoration: "none", color:" #0F7C01"}}><h4 className="donation-header">{article.header}</h4></Link>
                                <p>{article.details}</p>
                                <p className="article-goal">GOAL: ${article.goal}</p>
                            </div>                            
                        </div>                    
                ))}
                </div>
            </div>
            <div className="donate-status-container">
                <div className="donation-status">
                    <div className="donation-progress" style={{width:`${riseWidth(currentIndex)}%` }}></div>
                    <span className="donation-span"><span>Raise: ${articles[currentIndex].rise}</span><span>GOAL: ${articles[currentIndex].goal}</span></span>
                </div>
            </div>
            <div className="donation-description">
                <div className="donation-details">
                    <h1>{articles[currentIndex].header}</h1>
                    <p>
                        {articles[currentIndex].description} 
                    </p> 
                    <div className="donation-contact">
                        <img src={articles[currentIndex].img2} alt="description-img" className="description-img"/>
                    </div> 
                    <div className="donation">
                        <span>Your Donation:</span>
                        <span>${total}</span>
                    </div>  
                    <div className="donation-buttons">
                    {[10, 20, 50, 100, 1000].map(amount => (
                            <button
                                key={amount}
                                onClick={() => handleClick(amount)}
                                className="donation-button"
                            >
                                ${amount}
                            </button>
                        ))}
                    </div> 
                </div>  
            </div>
            <div className="donation-form-container">
                <h2>Details of you</h2>
                <form action="#">
                    <label htmlFor="fullName">Full name</label>
                    <input type="text" id="full-name" placeholder="Full Name" className="donate-input"/>
                    <label htmlFor="e-mail">Email</label>
                    <input type="email" id="e-mail" placeholder="example@yourname.com" className="donate-input" />
                    <label htmlFor="phone-number">Phone number</label>
                    <input type="number" id="phone-number" placeholder="+1 111 1111 1111" className="donate-input" />                    
                </form>
                <div className="payment-method">
                    <p>Select payment method</p>
                </div>
                <button type="submit" className="donate-button">Donate now</button>               
            </div>
        </div>
        <Footer />
        </>
    )
    
}

export default Donation