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
    console.log(searchParams)

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
                                <h3 className="">{article.header}</h3>
                                <p>{article.description}</p>
                                <p className="article-goal">GOAL: ${article.goal}</p>
                            </div>                            
                        </div>                    
                ))}
                </div>
            </div>
            <div className="donate-status-container">
                
            </div>
         </div>
        </>
    )
    
}

export default Donation