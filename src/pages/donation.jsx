import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PageNavbar from "../components/navbar";
import donate from "../assets/donate.jpg";
import secondDonate from "/src/assets/donate.webp";
import "../components/Donation.css"


const Donation = ({articles}) => {      
    const [filteredArticles, setFilteredArticles] = useState([]);
    console.log(filteredArticles)
    const [searchParams] = useSearchParams();
    let currentIndex; 

    useEffect(() => {
        if (articles) {
            const currentArticleId = parseInt(searchParams.get("articleId"), 10);
            console.log(currentArticleId);            

            if (!currentArticleId) {
                console.warn("No article ID found in query params");
            }

            const remainingArticles = articles.filter(
                article => article.id !== currentArticleId);
            setFilteredArticles(remainingArticles);
            console.log(remainingArticles)
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
    console.log(currentIndex)
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
                                <h4 className="">{article.header}</h4>
                                <p>{article.description}</p>
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
                        Training farmers to optimize production using solar pumps enhances efficiency, 
                        reduces <br /> costs, and promotes sustainability. Solar-powered irrigation provides a reliable
                        water <br /> source, increasing yields while reducing dependency on expensive and polluting 
                        fossil fuels. 
                    </p> 
                    <div className="donation-contact"></div> 
                    <div className="donation">
                        <span>Your Donation:</span>
                        <span>$</span>
                    </div>  
                    <div className="donation-buttons">
                        <button className="donation-button">$10</button>
                        <button className="donation-button">$20</button>
                        <button className="donation-button">$50</button>
                        <button className="donation-button">$100</button>
                        <button className="donation-button">$1000</button>
                    </div> 
                </div>  
                 
            </div>
         </div>
        </>
    )
    
}

export default Donation